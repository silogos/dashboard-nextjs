export interface SalesResponse {
  data: {
    id: number;
    name: string;
    sales_id: string;
    item_id: number;
    qty: number;
    consumen_name: string;
    transaction_date: string;
  }[];
  message: string;
}

export interface UsersResponse {
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    country_name: string;
    device_id: string;
    bitcoin_address: string;
    avatar: string;
    login_ip: string;
    active_device_mac: string;
    notes: string;
    age: number;
    referral_id: number;
    locale: string;
    favorite_music: string;
    phone_number: string;
    twitter_username: string;
    job: string;
    invoice_email_address: string;
    hmac_secret: string;
    favorite_quote: string;
    primary_color: string;
    secondary_color: string;
    material: string;
    shipping_address: string;
    zip_code: string;
    latitude: string;
    longitude: string;
    favorite_animal: string;
    app_version: string;
    timezone: string;
  }[];
}

export type UsersResponseDataKey = keyof UsersResponse['data'][0]