import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Inventory } from "../models/inventory.models.js";
import { Sneaker } from "../models/sneaker.models.js";
dotenv.config();

//CRUD
export const inventoryController = {
  getInventory: async () => {
    const inventoryCollection = Inventory;
    try {
      const inventory = await inventoryCollection.find({});
      return inventory != null ? inventory : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getInventoryItem: async (id) => {
    const inventoryCollection = Inventory;
    try {
      const inventoryItem = await inventoryCollection.findOne({ id });
      return inventoryItem != null ? inventoryItem.toObject() : {};
    } catch (err) {
      console.log(err);
    }
  },
  getInventoryForCustomers: async () => {
    const inventoryCollection = Inventory;
    try {
      const products = await inventoryCollection.find({ showInCatalog: true });
      return products != null ? products : {};
    } catch (err) {
      console.log(err);
    }
  },
  getFeaturedInventory: async () => {
    const inventoryCollection = Inventory;
    try {
      const products = await inventoryCollection.find({ featured: true });
      return products != null ? products : {};
    } catch (err) {
      console.log(err);
    }
  },
  addInventoryItem: async (id, sneakerDetail) => {
    const inventoryCollection = Inventory;
    const sneakerCollection = Sneaker;
    try {
      const sneaker = await sneakerCollection.findOne({
        id,
      });
      if (sneaker != null) {
        const existingSneaker = await inventoryCollection.findOne({
          id,
        });
        if (existingSneaker != null) {
          return {};
        } else {
          const updateStatus = await inventoryCollection.updateOne(
            { id },
            {
              name: sneaker.name,
              images: { ...sneaker.images },
              shoeSize: [
                {
                    size: 4.5,
                    count: 10
                },
                {
                    size: 5,
                    count: 10
                },
                {
                    size: 5.5,
                    count: 10
                },
                {
                    size: 6,
                    count: 10
                },
                {
                    size: 6.5,
                    count: 10
                },
                {
                    size: 7,
                    count: 10
                },
                {
                    size: 7.5,
                    count: 10
                },
                {
                    size: 8,
                    count: 10
                },
                {
                    size: 8.5,
                    count: 10
                },
                {
                    size: 9,
                    count: 10
                },
                {
                    size: 9.5,
                    count: 10
                },
                {
                    size: 10,
                    count: 10
                },
                {
                    size: 10.5,
                    count: 10
                },
                {
                    size: 11,
                    count: 10
                },
                {
                    size: 11.5,
                    count: 10
                },
                {
                    size: 12,
                    count: 10
                }
            ],
              colorway: sneaker.colorway ?? "",
              brand: sneaker.brand ?? "",
              marketPrice: sneaker.price,
              price: sneakerDetail.price ?? sneaker.price,
              showInCatalog: true,
              featured: false,
              stock: sneakerDetail.stock ?? 0,
              inventoryID: uuidv4(),
              sourceID: sneaker.id,
            },
            { upsert: true }
          );
          const updateSneakerStatus = await sneakerCollection.updateOne(
            {id}, 
            {
              visible: false
            }
          )
          if (updateStatus && updateStatus.upsertedCount > 0) {
            return (
              (
                await inventoryCollection.findOne({
                  id,
                })
              ).toObject() ?? {}
            );
          }
        }
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  },
  updateInventoryItem: async (id, updates) => {
    const inventoryCollection = Inventory;
    try {
      const sneaker = await inventoryCollection.findOne({
        id,
      });
      if (sneaker != null) {
        const updateSneaker = await inventoryCollection.updateOne(
          { id },
          {
            price: updates.price ?? sneaker.price,
            featured: updates.featured ?? sneaker.featured,
            stock: updates.stock ?? sneaker.stock,
          }
        );
        if (updateSneaker?.modifiedCount > 0) {
          const updatedSneaker = await inventoryCollection.findOne({
            id,
          });
          console.log("added")
          return updatedSneaker.toObject() ?? {};
        } else {
          return {};
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  deleteInventoryItem: async (id) => {
    const inventoryCollection = Inventory;
    const sneakerCollection = Sneaker;
    try {
      const sneaker = await inventoryCollection.findOne({
        id,
      });
      const sneakerName = sneaker?.name ?? "'NOT IN INVENTORY'";
      if (sneaker != null) {
        const deleteSneaker = await inventoryCollection.deleteOne({ id });
        const updateSneaker = await sneakerCollection.updateOne({id},{visible:true})
        if (deleteSneaker.deletedCount > 0) {
          return {
            msg: `Successfully deleted ${sneakerName}!`,
            data: { deleted: true },
          };
        }
      }
      return {
        msg: `Failed to delete ${sneakerName}`,
        data: { deleted: false },
      };
    } catch (err) {
      console.log(err);
    }
  },
};
