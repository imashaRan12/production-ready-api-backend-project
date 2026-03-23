import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  cancelSubscription,
  createSubscription,
  deleteSubscription,
  getAllSubscriptions,
  getUpcomingRenewals,
  getUserSubscription,
  updateSubscription,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/user/:id", authorize, getUserSubscription);

subscriptionRouter.put("/user/:id", authorize, updateSubscription);

subscriptionRouter.delete("/user/:id", authorize, deleteSubscription);

subscriptionRouter.put("/user/:id/cancel", authorize, cancelSubscription);

subscriptionRouter.get("/upcoming-renewals", authorize, getUpcomingRenewals);

export default subscriptionRouter;
