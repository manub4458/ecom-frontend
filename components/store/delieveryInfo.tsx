import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

const DeliveryInfo: React.FC = () => {
  return (
    <div className="text-white p-4 rounded-lg flex items-center gap-3 text-sm border border-gray-600">
      <MapPin className="w-5 h-5 text-gray-300" />
      <div>
        <p>
          Delivery at{" "}
          <Link href="#" className="text-blue-400 underline">
            Mumbai, 400049
          </Link>
          .
        </p>
        <p className="text-gray-400">Will be delivered by 6 May 2025.</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;
