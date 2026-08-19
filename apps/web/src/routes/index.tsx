import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CTIN1.cpp - Home" },
      {
        name: "A Platform for high school students to learn from.",
        content: "This app provides with lots of helpful information",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
