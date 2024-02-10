import { z } from "zod"; // 👈 Import zod
// 1. Define a schema for the form used in ask-question.tsx.
export const QuestionSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(20).max(1000),
  tags: z.array(z.string().min(5).max(15)).max(3).min(1),
});
