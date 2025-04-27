// components/nav-user.tsx

"use client"

import { Moon, Sun, LogOut, User as UserIcon, Loader2 } from "lucide-react" // Import Sun, Moon, UserIcon, Loader2
import { useTheme } from "next-themes" // Import useTheme

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button" // Import Button
import type { User } from "@supabase/supabase-js" // Import User type

// Function to get initials from email
function getInitials(email: string | undefined): string {
  if (!email) return "?"
  const parts = email.split("@")[0]
  const nameParts = parts.split(/[._-]/) // Split by common separators
  if (nameParts.length > 1) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
  } else if (parts.length > 1) {
    return (parts[0] + parts[1]).toUpperCase()
  } else if (parts.length === 1 && parts[0]) {
    return parts[0][0].toUpperCase()
  }
  return email[0]?.toUpperCase() ?? "?"
}

export function NavUser({
  user,
  onSignOut,
  isLoading, // Add isLoading prop
}: {
  user: User | null // Accept nullable User
  onSignOut: () => Promise<void> // Function prop for sign out
  isLoading: boolean // Prop to indicate loading state
}) {
  const { setTheme, theme } = useTheme() // Get theme functions

  // Decide on the trigger content based on loading state
  const triggerContent = isLoading ? (
    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /> // Loading spinner
  ) : (
    <Avatar className="h-8 w-8">
      {/* We don't have a real avatar URL from Supabase Auth by default */}
      {/* <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.user_metadata?.name || user?.email} /> */}
      <AvatarFallback>{getInitials(user?.email)}</AvatarFallback>
    </Avatar>
  )

  // Don't render dropdown if loading or no user (except the trigger might show loading)
  if (!user && !isLoading) {
    return null // Or potentially a sign-in button if needed here
  }

  return (
    <DropdownMenu>
      {/* Use Button as trigger for better accessibility & consistent styling */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
          {triggerContent}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {/* Added forceMount to prevent layout shifts when opening */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.user_metadata?.name || user?.email?.split("@")[0]}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Theme Toggle Item */}
          <DropdownMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
          </DropdownMenuItem>
          {/* Can add Settings/Profile link here later if needed */}
          {/* <DropdownMenuItem disabled>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* Sign Out Item */}
        <DropdownMenuItem onClick={onSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}