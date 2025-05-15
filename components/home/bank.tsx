import React from "react";
import { Container } from "@/components/ui/container";

export function Bank() {
  return (
    <Container>
      <div className="space-y-10 pb-20 mt-20">
        <div className="flex flex-col gap-y-4 md:gap-y-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold">Exciting Bank Offers</h3>
          <div className="flex gap-6 justify-center items-center">
            <img
              src="/assets/offers/offer1.webp"
              width={`500px`}
              className="rounded-lg shadow-xl"
            />
            <img
              src="/assets/offers/offer1.webp"
              width={`500px`}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
