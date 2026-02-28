import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
}

export function generateAvatarUrl(name) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return `https://ui-avatars.com/api/?name=${initials}&background=258440&color=fff&size=128`;
}

export function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "approved":
    case "verified":
    case "delivered":
      return "text-green-600 bg-green-100";
    case "pending":
    case "processing":
      return "text-yellow-600 bg-yellow-100";
    case "rejected":
    case "cancelled":
      return "text-red-600 bg-red-100";
    case "shipped":
      return "text-blue-600 bg-blue-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}
