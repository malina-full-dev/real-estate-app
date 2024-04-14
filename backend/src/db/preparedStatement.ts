import db from ".";
import { sql, eq, desc, count } from "drizzle-orm";

import { user } from "src/model/user";
import { property } from "src/model/property";
import { house } from "src/model/house";

/**
 * @params      email
 * @returns     User object of provided email
 */
export const preparedGetUserByEmail = db
  .select()
  .from(user)
  .where(eq(user.email, sql.placeholder("email")))
  .limit(1)
  .prepare("get-user-by-email");

/**
 * @param firstName string - firstName of user
 * @param lastName  string - lastName of user
 * @param email     string - email of user
 * @param password  string - hashed password to login
 * @param phone     string - unique phone number
 * @param dob       string - date of birth in format YYYY-MM-DD
 * @returns         string - Promise to add new user to the database
 */
export const preparedInsertUser = db
  .insert(user)
  .values({
    firstName: sql.placeholder("firstName"),
    lastName: sql.placeholder("lastName"),
    email: sql.placeholder("email"),
    password: sql.placeholder("password"),
    phone: sql.placeholder("phone"),
    dob: sql.placeholder("dob"),
    bio: sql.placeholder("bio"),
    profilePicUrl: sql.placeholder("profilePicUrl"),
    secondEmail: sql.placeholder("secondEmail"),
    enabled: sql.placeholder("enabled"),
    verified: sql.placeholder("verified"),
    isAdmin: sql.placeholder("isAdmin"),
    isAgent: sql.placeholder("isAgent"),
    role: sql.placeholder("role")
  })
  .prepare("insert-user");

/**
 * @params userId   string - ID of the user
 * @returns User    returns user of the provided id or []
 */
export const preparedGetUserById = db
  .select()
  .from(user)
  .where(eq(user.id, sql.placeholder("userId")))
  .prepare("get-user-by-id");

/**
 * @param sellerId      string - ID in uuid format of the current user
 * @param title         string - Title of the listing of the property
 * @param slug          string - Slug of the title
 * @param description   string - Description of the property
 * @param toRent        Boolean - Is property for rent?
 * @param address       string - Current implementation is to put address as a whole but need to create address table and add address to it and refer the address id instead on here
 * @param closeLandmark string - Closest Landmark
 * @param propertyType  string - House | Flat | Apartment | Land | Building
 * @param availableFrom string - Date in string from when the property is for sale or rent
 * @param availableTill string - Date in string till the date where property is available
 * @param price         string - Price of the property
 * @param negotiable    Boolean - Is property negotiable
 * @param imageUrl      string[] - Array of image url
 * @param status        string - Sale | Hold | Sold
 * @param expiresOn     string - Date in string where the listing expires on the website
 * @returns             Promise to insert new property in database.
 */
export const preparedInsertProperty = db
  .insert(property)
  .values({
    sellerId: sql.placeholder("sellerId"),
    title: sql.placeholder("title"),
    slug: sql.placeholder("slug"),
    description: sql.placeholder("description"),
    toRent: sql.placeholder("toRent"),
    address: sql.placeholder("address"),
    closeLandmark: sql.placeholder("closeLandmark"),
    propertyType: sql.placeholder("propertyType"),
    availableFrom: sql.placeholder("availableFrom"),
    availableTill: sql.placeholder("availableTill"),
    price: sql.placeholder("price"),
    negotiable: sql.placeholder("negotiable"),
    imageUrl: [
      "https://placehold.co/600x400",
      "https://placehold.co/800x800",
      "https://placehold.co/1200x1000"
    ],
    // imageUrl: sql.placeholder("imageUrl"),
    status: sql.placeholder("status"),
    expiresOn: sql.placeholder("expiresOn"),
    views: 1
  })
  .returning({ idOfNewProperty: property.id })
  .prepare("insert-property");

/**
 * @param
 */
export const preparedInsertHouse = db
  .insert(house)
  .values({
    propertyId: sql.placeholder("propertyId"),
    houseType: sql.placeholder("houseType"),
    roomCount: sql.placeholder("roomCount"),
    floorCount: sql.placeholder("floorCount"),
    kitchenCount: sql.placeholder("kitchenCount"),
    sharedBathroom: sql.placeholder("sharedBathroom"),
    bathroomCount: sql.placeholder("bathroomCount"),
    facilities: sql.placeholder("facilities"),
    area: sql.placeholder("area"),
    furnished: sql.placeholder("furnished"),
    facing: sql.placeholder("facing"),
    carParking: sql.placeholder("carParking"),
    bikeParking: sql.placeholder("bikeParking"),
    evCharging: sql.placeholder("evCharging"),
    builtAt: sql.placeholder("builtAt"),
    connectedToRoad: sql.placeholder("connectedToRoad"),
    distanceToRoad: sql.placeholder("distanceToRoad"),
    listedAt: sql.placeholder("listedAt"),
    updatedAt: sql.placeholder("updatedAt")
  })
  .returning({ idofNewHouse: house.id })
  .prepare("insert-house");

/**
 * @param propertyId string - id of the property to fetch from postgres
 */
export const preparedGetPropertyById = db
  .select()
  .from(property)
  .where(eq(property.id, sql.placeholder("propertyId")))
  .limit(1)
  .prepare("get-property-by-id");

/**
 * @param keyword string - keyword to search the title and description
 */
export const preparedGetPropertyByKeyword = sql`SELECT id, title, description, ts_rank(search_vector, to_tsquery('english', ${sql.placeholder("keyword")})) as rank FROM property WHERE search_vector @@ to_tsquery('english', ${sql.placeholder("keyword")}) ORDER BY rank desc;`;

/**
 * @param limit   number - number of properties to fetch from database
 * @param offset  number - skip this many number of properties
 * @returns       Property[]
 */
export const getListOfProperties = db
  .select()
  .from(property)
  .orderBy(desc(property.listedAt))
  .limit(sql.placeholder("limit"))
  .offset(sql.placeholder("offset"))
  .prepare("get-number-of-properties");

/**
 * @returns   number - count of the total number of properties in the database
 */
export const getTotalNumberOfProperties = db
  .select({ count: count() })
  .from(property)
  .prepare("get-count-of-properties");

export const preparedDeletePropertyById = db
  .delete(property)
  .where(eq(property.id, sql.placeholder("propertyId")))
  .prepare("delete-property-by-id");
