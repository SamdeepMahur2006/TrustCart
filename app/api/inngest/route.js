import { serve } from "inngest/next";
import { inngest } from "@/config";
import { syncUserCreation, syncUserUpdation } from "@/config/inggest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserCreation
  ],
});
