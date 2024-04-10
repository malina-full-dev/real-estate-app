import { Router, Request, Response, NextFunction } from "express";
import {
  addProperty,
  getPropertyById,
  searchPropertyByKeyword,
  seedProperty
} from "src/controller/property/propertyController";
import { newPropertySchema } from "src/controller/property/propertySchema";
import { onlyIfLoggedIn } from "src/middleware/authCheck";
import { validateRequest } from "src/middleware/validateRequest";
// import { Property } from "src/model/property";
import { AuthError, BadRequestError, NotFoundError } from "src/utils/error";
import logger from "src/utils/logger";
import { dummyPropertyData } from "seed";

const router = Router();

/**
 * @route       /api/v1/property/seed-property
 * @method      POST
 * @desc        Seed dummy property into postgresql db
 */
router.route("/seed-property").post(onlyIfLoggedIn, async (req: Request, res: Response) => {
  try {
    await seedProperty(dummyPropertyData);
    res.status(201).send({ message: "Property info seeded successfully!" });
  } catch (error) {
    console.log("Error while seeding the property to database!");
    res.status(500).send({ message: "Could not seed property info to database!" });
  }
});

/**
 * @route               /api/v1/property/new
 * @method              POST
 * @desc                Add new property listing
 * @param title         String - Title of the listing of the property
 * @param description   String - Description of the property
 * @param toRent        Boolean - Is property for rent?
 * @param address       String - Current implementation is to put address as a whole but need to create address table and add address to it and refer the address id instead on here
 * @param closeLandmark String - Closest Landmark
 * @param propertyType  String - House | Flat | Apartment | Land | Building
 * @param availableFrom String - Date in string from when the property is for sale or rent
 * @param availableTill String - Date in string till the date where property is available
 * @param price         String - Price of the property
 * @param negotiable    Boolean - Is property negotiable
 * @param imageUrl      String[] - Array of image url
 * @param status        String - Sale | Hold | Sold
 * @param expiresOn     String - Date in string where the listing expires on the website
 * @returns             Response or NextFunction
 */
router
  .route("/new")
  .post(
    onlyIfLoggedIn,
    validateRequest(newPropertySchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.session.userId;
      try {
        const {
          title,
          description,
          toRent,
          address,
          closeLandmark,
          propertyType,
          availableFrom,
          availableTill,
          price,
          negotiable,
          imageUrl,
          status,
          expiresOn
        } = req.body;
        console.log(userId, title, description);

        //In this below addProperty function, TypeScript throws error as userId
        //can be undefined. However that should not be the case as we already have
        //`onlyIfLoggedIn` middleware which will throw AuthError if userId is not present
        //The way to solve it could be to add `!` in the above line where we have;
        //const userId = req.session.userId!;
        //Howerver, let's add a if clause to check if userId isn't null or undefined
        //even if it should not be possible.
        if (!userId) {
          throw new AuthError("Could not verify the user! Please sign in to perfom this action!");
        }

        // await db.insert(property).values({
        //   sellerId: userId,
        //   title,
        //   slug: title,
        //   description,
        //   toRent,
        //   address,
        //   closeLandmark,
        //   propertyType,
        //   availableFrom,
        //   availableTill,
        //   price,
        //   negotiable,
        //   imageUrl,
        //   status,
        //   expiresOn: expiresOn ? expiresOn : new Date()
        // });
        await addProperty(
          userId,
          title,
          description,
          toRent,
          address,
          closeLandmark,
          propertyType,
          availableFrom,
          availableTill,
          price,
          negotiable,
          imageUrl,
          status,
          expiresOn ? expiresOn : new Date()
        );

        return res.status(201).send({ message: "New Property added!" });
      } catch (error) {
        next(error);
      }
    }
  );

/**
 * @route               /api/v1/property/:propertyId
 * @method              GET
 * @desc                Get property using its id
 * @reqParams           string - propertyId
 */
router.route("/:propertyId").get(async (req: Request, res: Response) => {
  console.log("Property search by id", req.params.propertyId);
  const propertyById = await getPropertyById(req.params.propertyId);

  if (!propertyById) {
    logger.notFound(
      `Property ID: ${req.params.propertyId} - (${new Date().toISOString()})`,
      {
        userId: req.session.userId,
        email: req.session.email,
        ip: req.socket.remoteAddress
      },
      true
    );
    throw new NotFoundError(`Property of id ${req.params.propertyId} not found!`);
  }

  return res.status(200).send(propertyById);
});

/**
 * @route               /api/v1/property/search/title?keyword=value
 * @eg                  /api/v1/property/search/title?keyword=beach
 * @method              GET
 * @desc                Search property by title and/or description
 * @reqParams           string - propertyId
 */
router.route("/search/title").get(async (req: Request, res: Response) => {
  const keyword = req.query.keyword as string;

  logger.info(
    `Searched property using term: ${keyword}`,
    {
      keyword,
      userId: req.session.userId,
      userEmail: req.session.email,
      ip: req.socket.remoteAddress
    },
    true
  );

  if (keyword && keyword.trim().length > 1) {
    const propertyByKeyword = await searchPropertyByKeyword(keyword);

    return res.status(200).send(propertyByKeyword);
  } else {
    throw new BadRequestError("Please enter valid string to search!");
  }
});

export default router;
