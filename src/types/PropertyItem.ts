export type NearbyProperty = {
  id: string;
  name: string;
  address: { number: string; street: string; city: string; zip: string };
};

export type Address = {
  city: string;
  country: string;
  number: string;
  street: string;
  zip: string;
};

export type Property = {
  address: Address;
  description: string;
  email: string;
  id: string;
  image: string;
  name: string;
  phone: string;
};
