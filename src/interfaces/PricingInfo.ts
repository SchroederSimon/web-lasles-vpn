export interface PricingInfo {
    title: string;
    price: number | "Free";
    benefits: string[];
    currency: "U$S" | "$ARG";
    type: "monthly" | "daily" | "weekly";
}
