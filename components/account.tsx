"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Heart, LogOut, ShoppingCart, User } from "lucide-react";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";

interface AccountProps {
  session: boolean;
  name: string;
}

export const Account = ({ session, name }: AccountProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-6 w-6 mx-2">
        <FaRegUser className="h-full w-full text-zinc-300" />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <FaRegUser className="h-6 w-6 mx-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {session ? (
          <>
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => router.push("/my/dashboard")}
            >
              <User className="mr-3 h-4 w-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => router.push("/orders")}
            >
              <ShoppingCart className="mr-3 h-4 w-4" />
              Orders
            </DropdownMenuItem>
            {/* <DropdownMenuItem
          className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
          onClick={() => router.push("#")}
        >
          <RiCoupon3Line className="mr-3 h-4 w-4" />
          Coupons
        </DropdownMenuItem> */}
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => router.push("/wishlist")}
            >
              <Heart className="mr-3 h-4 w-4" />
              Wishlist
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => router.push("/login")}
            >
              <MdLogin className="mr-3 h-4 w-4" />
              Sign In
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
              onClick={() => router.push("/registration")}
            >
              <MdPersonAdd className="mr-3 h-4 w-4" />
              Sign Up
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
