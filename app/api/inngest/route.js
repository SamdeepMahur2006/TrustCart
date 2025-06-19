import { serve } from "inngest/next"; // ✅ Check that this path exists in your node_modules

import { inngest } from "../../../config";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "../../../config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
