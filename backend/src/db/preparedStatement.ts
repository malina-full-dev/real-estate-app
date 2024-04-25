import db from ".";
import { sql, eq, desc, count, and, gte } from "drizzle-orm";

import { user } from "src/model/user";
import { property } from "src/model/property";
import { house } from "src/model/house";
import { land } from "src/model/land";
import { address } from "src/model/address";
import { bookmark } from "src/model/bookmark";

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
 * @param id              string - ID in uuid format of the to be inserted property
 * @param sellerId        string - ID in uuid format of the current user
 * @param propertyTypeId  string - ID in uuid format of the property type; HouseID or LandID
 * @param title           string - Title of the listing of the property
 * @param slug            string - Slug of the title
 * @param description     string - Description of the property
 * @param toRent          Boolean - Is property for rent?
 * @param address         string - Current implementation is to put address as a whole but need to create address table and add address to it and refer the address id instead on here
 * @param closeLandmark   string - Closest Landmark
 * @param propertyType    string - House | Flat | Apartment | Land | Building
 * @param availableFrom   string - Date in string from when the property is for sale or rent
 * @param availableTill   string - Date in string till the date where property is available
 * @param price           string - Price of the property
 * @param negotiable      Boolean - Is property negotiable
 * @param imageUrl        string[] - Array of image url
 * @param status          string - Sale | Hold | Sold
 * @param expiresOn       string - Date in string where the listing expires on the website
 * @returns               Promise to insert new property in database.
 */
export const preparedInsertProperty = db
  .insert(property)
  .values({
    id: sql.placeholder("id"),
    sellerId: sql.placeholder("sellerId"),
    propertyTypeId: sql.placeholder("propertyTypeId"),
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
  .prepare("insert-property");

/**
 * @param
 */
export const preparedInsertHouse = db
  .insert(house)
  .values({
    id: sql.placeholder("id"),
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
    distanceToRoad: sql.placeholder("distanceToRoad")
  })
  .prepare("insert-house");

export const preparedInsertLand = db
  .insert(land)
  .values({
    id: sql.placeholder("id"),
    landType: sql.placeholder("landType"),
    area: sql.placeholder("area"),
    length: sql.placeholder("length"),
    breadth: sql.placeholder("breadth"),
    connectedToRoad: sql.placeholder("connectedToRoad"),
    distanceToRoad: sql.placeholder("distanceToRoad")
  })
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
 * @param slug string - slug of the property to fetch from postgres
 */
export const preparedGetPropertyBySlug = db
  .select()
  .from(property)
  .where(eq(property.slug, sql.placeholder("slug")))
  .limit(1)
  .prepare("get-property-by-slug");

/**
 * @param keyword string - keyword to search the title and description
 */
export const preparedGetPropertyByKeyword = sql`SELECT id, title, description, ts_rank(search_vector, to_tsquery('english', ${sql.placeholder("keyword")})) as rank FROM property WHERE search_vector @@ to_tsquery('english', ${sql.placeholder("keyword")}) ORDER BY rank desc;`;

const nowToday = new Date();
const nowTodayInISOString = nowToday.toISOString();
/**
 * @param limit   number - number of properties to fetch from database
 * @param offset  number - skip this many number of properties
 * @returns       Property[]
 */
export const getListOfProperties = db
  .select()
  .from(property)
  .where(and(eq(property.private, false), gte(property.expiresOn, nowTodayInISOString)))
  .orderBy(desc(property.featured), desc(property.views), desc(property.listedAt))
  .limit(sql.placeholder("limit"))
  .offset(sql.placeholder("offset"))
  .prepare("get-number-of-properties");

/**
 * @returns   number - count of the total number of properties in the database
 */
export const getTotalNumberOfProperties = db
  .select({ count: count() })
  .from(property)
  .where(and(eq(property.private, false), gte(property.expiresOn, nowTodayInISOString)))
  .prepare("get-count-of-properties");

/**
 * @param propertyId    string - property id to delete
 */
export const preparedDeletePropertyById = db
  .delete(property)
  .where(eq(property.id, sql.placeholder("propertyId")))
  .prepare("delete-property-by-id");

/**
 * @param id                string - uuid of the address to insert
 * @param houseNumber       string - house number
 * @param street            string - name of the street
 * @param wardNumber        number - ward number
 * @param municipality      string - name of the municipality
 * @param city              string - name of the city
 * @param district          string - name of the district
 * @param province          string - name of the province
 * @param latitude          number - latitude
 * @param longitude         number - longitude
 */
export const preparedInsertAddress = db
  .insert(address)
  .values({
    id: sql.placeholder("id"),
    houseNumber: sql.placeholder("houseNumber"),
    street: sql.placeholder("street"),
    wardNumber: sql.placeholder("wardNumber"),
    municipality: sql.placeholder("municipality"),
    city: sql.placeholder("city"),
    district: sql.placeholder("district"),
    province: sql.placeholder("province"),
    latitude: sql.placeholder("latitude"),
    longitude: sql.placeholder("longitude")
  })
  .prepare("insert-address");

/**
 * @param userId        string - uuid of the user who bookmarked the property listing
 * @param propertyId    string - uuid of the property
 */
export const preparedInsertBookmark = db
  .insert(bookmark)
  .values({
    userId: sql.placeholder("userId"),
    propertyId: sql.placeholder("propertyId")
  })
  .prepare("insert-bookmark");

/**
 * @param userId        string - uuid of the user who bookmarked the property listing
 * @param propertyId    string - uuid of the property
 */
export const preparedGetBookmark = db
  .select()
  .from(bookmark)
  .where(
    and(
      eq(bookmark.userId, sql.placeholder("userId")),
      eq(bookmark.propertyId, sql.placeholder("propertyId"))
    )
  )
  .prepare("get-bookmark");

/**
 * @param userId        string - uuid of the user who bookmarked the property listing
 * @param propertyId    string - uuid of the property
 */
export const preparedDeleteBookmark = db
  .delete(bookmark)
  .where(
    and(
      eq(bookmark.userId, sql.placeholder("userId")),
      eq(bookmark.propertyId, sql.placeholder("propertyId"))
    )
  )
  .prepare("delete-bookmark");

/**
 * @param userId        string - uuid of the user who bookmarked the property listing
 * @param propertyId    string - uuid of the property
 */
export const preparedAppendToBookmarkInUser = db
  .update(user)
  .set({ bookmarks: sql`array_append(bookmarks, ${sql.placeholder("propertyId")})` })
  .where(eq(user.id, sql.placeholder("userId")))
  .prepare("append-bookmark-in-user");

/**
 * @param userId        string - uuid of the user who bookmarked the property listing
 * @param propertyId    string - uuid of the property
 */
export const preparedDeleteBookmarkFromUser = db
  .update(user)
  .set({ bookmarks: sql`array_remove(bookmarks, ${sql.placeholder("propertyId")})` })
  .where(eq(user.id, sql.placeholder("userId")))
  .prepare("delete-bookmark-in-user");
