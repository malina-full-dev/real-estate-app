import { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  index,
  uuid,
  varchar,
  text,
  boolean,
  smallint,
  timestamp
} from "drizzle-orm/pg-core";
import { property } from "./property";

export const HouseType = pgEnum("house_type", [
  "House",
  "Flat",
  "Shared",
  "Room",
  "Apartment",
  "Bungalow",
  "Villa"
]);

export const house = pgTable(
  "house",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    propertyId: uuid("property_id").references(() => property.id),
    houseType: HouseType("house_type").notNull(),
    roomCount: smallint("room_count").notNull(),
    floorCount: smallint("floor_count").default(1).notNull(),
    kitchenCount: smallint("kitchen_count").notNull(),
    sharedBathroom: boolean("shared_bathroom").default(false).notNull(),
    bathroomCount: smallint("bathroom_count").notNull(),
    facilities: text("facilities"),
    area: varchar("area", { length: 125 }),
    furnished: boolean("furnished").default(false).notNull(),
    facing: varchar("facing", { length: 125 }),
    carParking: smallint("car_parking"),
    bikeParking: smallint("bike_parking"),
    evCharging: boolean("ev_charging").default(false),
    builtAt: timestamp("built_at"),
    connectedToRoad: boolean("connected_to_road").notNull(),
    distanceToRoad: boolean("distance_to_road").notNull(),
    listedAt: timestamp("listed_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow()
  },
  (table) => {
    return {
      houseTypeIndex: index("house_type_index").on(table.houseType),
      roomCountIndex: index("room_count_index").on(table.roomCount)
    };
  }
);

export type House = InferSelectModel<typeof house>;
