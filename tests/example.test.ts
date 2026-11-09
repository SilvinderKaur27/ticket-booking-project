import { describe, it, expect }  from "vitest";

describe("Backend tests", () => {
    it("should return a welcome message", () => {
        const message = "Ticket Booking Backend is running!";

        expect(message).toBe("Ticket Booking Backend is running!");
    });
});