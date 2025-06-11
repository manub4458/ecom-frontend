"use client";

import { useState } from "react";
import { Product } from "@/types";
import { ProductDescription } from "@/components/store/productDescription";
import { ProductReviews } from "@/components/store/product-reviews";

interface ProductTabsProps {
  product: Product;
  productId: string;
}

export const ProductTabs = ({ product, productId }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Product Description" },
    { id: "specification", label: "Specification" },
    { id: "return", label: "Return and Refund Policy" },
    { id: "review", label: "Review" },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-wrap border-b border-gray-200 justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {activeTab === "description" && <ProductDescription data={product} />}

        {/* {activeTab === "specification" && (
          <div className="prose max-w-none sm:px-6 lg:px-8 py-2">
            {product.sizeAndFit && product.sizeAndFit.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-medium">Size & Fit</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.sizeAndFit.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.materialAndCare && product.materialAndCare.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-medium">Material & Care</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.materialAndCare.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.enabledFeatures && product.enabledFeatures.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-medium">Features</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.enabledFeatures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {!product.sizeAndFit?.length &&
              !product.materialAndCare?.length &&
              !product.enabledFeatures?.length && (
                <p className="text-gray-500">No specifications available.</p>
              )}
          </div>
        )} */}

        {activeTab === "specification" && (
          <div className="max-w-none">
            <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
              {/* GENERAL Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  GENERAL
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">Brand</div>
                  <div className="w-2/3 text-gray-600">Carrier</div>
                </div>
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">Model</div>
                  <div className="w-2/3 text-gray-600">
                    Carrier Estrella Fx 19k
                  </div>
                </div>
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Model Series
                  </div>
                  <div className="w-2/3 text-gray-600">Estrella Fx 19k</div>
                </div>
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">Colour</div>
                  <div className="w-2/3 text-gray-600">White</div>
                </div>
              </div>

              {/* STAR RATING Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  STAR RATING
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Star Rating
                  </div>
                  <div className="w-2/3 text-gray-600">3</div>
                </div>
              </div>

              {/* ISEER RATING Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  ISEER RATING
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    ISEER Rating
                  </div>
                  <div className="w-2/3 text-gray-600">3.81</div>
                </div>
              </div>

              {/* CAPACITY Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  CAPACITY
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Capacity
                  </div>
                  <div className="w-2/3 text-gray-600">1.5 ton</div>
                </div>
              </div>

              {/* POWER CONSUMPTION Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  POWER CONSUMPTION
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Power Consumption
                  </div>
                  <div className="w-2/3 text-gray-600">1550 watt</div>
                </div>
              </div>

              {/* REFRIGERANT Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  REFRIGERANT
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Refrigerant
                  </div>
                  <div className="w-2/3 text-gray-600">R32</div>
                </div>
              </div>

              {/* FILTER TYPE Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  FILTER TYPE
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Filter Type
                  </div>
                  <div className="w-2/3 text-gray-600">
                    Anti Dust, Antimicrobial Protection
                  </div>
                </div>
              </div>

              {/* INVERTER TECHNOLOGY Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  INVERTER TECHNOLOGY
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Inverter Technology
                  </div>
                  <div className="w-2/3 text-gray-600">Yes</div>
                </div>
              </div>

              {/* COMPRESSOR TYPE Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  COMPRESSOR TYPE
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Compressor Type
                  </div>
                  <div className="w-2/3 text-gray-600">
                    Reciprocating Compressor
                  </div>
                </div>
              </div>

              {/* VOLTAGE Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  VOLTAGE
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">Voltage</div>
                  <div className="w-2/3 text-gray-600">230 V</div>
                </div>
              </div>

              {/* WARRANTY SUMMARY Section */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  WARRANTY SUMMARY
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex px-4 py-3">
                  <div className="w-1/3 font-medium text-gray-700">
                    Warranty Summary
                  </div>
                  <div className="w-2/3 text-gray-600">
                    1-year comprehensive; additional 5 years on compressor
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "return" && (
          <div className="prose max-w-none sm:px-6 lg:px-8 py-2">
            <div>
              <li className="text-gray-700 text-base">
                In the refund or replacement or exchange process there is a
                complete chain to sort out the issues from the side of the
                customer.
              </li>
              <li className="text-gray-700 text-base">
                After receiving the product from FAVOBLISS through delivery boy
                customer receives product and raises query for refund or
                replacement or exchange again a particular process is followed
                so kindly record an unboxing video as per the company policies
                and mail that video at support@favobliss.com{" "}
                <span className="text-red-500">
                  The maximum number of days takes for a refund or replacement
                  or exchange process is 10 days.*
                </span>
              </li>
              <li className="text-gray-700 text-base">
                Log in to Favobliss and go to your Orders tab. Tap or click on
                Return to create a request.
              </li>
              <li className="text-gray-700 text-base">
                Select your applicable reason of return — based on which the
                option of an exchange, where applicable, will appear. Three
                options will be available:
              </li>
              <li className="text-gray-700 text-base">
                Exchange: Your order will be exchanged for a new identical
                product of a different size or color
              </li>
              <li className="text-gray-700 text-base">
                Replace: The product in your order will be replaced with an
                identical product in case it is damaged (broken or spoiled) or
                defective (has a functional problem that causes it not to work).
              </li>
              <li className="text-gray-700 text-base">
                Refund: If the product of your choice is unavailable in your
                preferred size or color or model, or if it is out of stock, you
                may decide that you want your money back. In this scenario, you
                may choose a Refund to have your money returned to you Depending
                on the kind of product you wish to return, your return request
                may have to undergo a verification process Following
                verification, you will be required to confirm your
                decision-based on the category of the product ordered.
              </li>
              <li className="text-gray-700 text-base">
                Keep ready all the requisite items necessary for a smooth
                returns process — including invoice, original packaging, price
                tags, freebies, accessories, etc.
              </li>
              <li className="text-gray-700 text-base">
                Kindly unbox your product safely so that you don’t damage your
                product’s packaging otherwise your refund or replacement request
                will not be accepted.* If you received a broken product or
                mismatched product kindly mail us within 24hrs of your delivery
                date with video clips and images**.
              </li>
              <li className="text-gray-700 text-base">
                If you have received a damaged or defective product or if it is
                not as described or mismatched product, you can raise a
                replacement request on the Website/App/Mobile site within 5 days
                of receiving the product. In case you have ordered TV or Mobile,
                our delivery executive will give you onsite unboxing of your
                product**.
              </li>
              <li className="text-gray-700 text-base">
                Pickup and Delivery of your order will be scheduled hand-in-hand
                in case of exchanges and replacements Refund will be initiated
                and processed if applicable after the pickup has been done with
                5-7 working days.
              </li>
              <li className="text-gray-700 text-base">
                Your request will be fulfilled according to Favobliss’s
                returns/replacement guarantee.
              </li>
            </div>
          </div>
        )}

        {activeTab === "review" && (
          <p className="text-black text-base sm:px-6 lg:px-8 py-2">
            No Reviews
          </p>
        )}
      </div>
    </div>
  );
};
