import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, Heart, Layers2, LogOut } from "lucide-react";
import Link from "next/link";
import { signOut } from "@/app/utils/auth";

type Props = {
  email: string;
  name: string;
  image: string;
};

const UserDropdown = ({ email, name, image }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src={image} alt="პროფილის სურათი" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDown size={16} strokeWidth={2} className="ml-1 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mt-2" align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs text-muted-foreground">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/favourites">
              <Heart size={16} strokeWidth={2} className="opacity-60" />
              <span className="text-sm">შენახული ვაკანსიები</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/my-jobs">
              <Layers2 size={16} strokeWidth={2} className="opacity-60" />
              <span className="text-sm">ჩემი ვაკანსიები</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form
              action={async () => {
                "use server";
                await signOut({
                  redirectTo: "/",
                });
              }}
            >
              <button className="flex w-full items-center gap-2">
                <LogOut size={16} strokeWidth={2} className="opacity-60" />
                <span className="mb-1">გასვლა</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
