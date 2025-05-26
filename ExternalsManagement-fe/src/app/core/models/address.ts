import { Candidate } from './candidate';
import { City } from './city';
import { Country } from './country';

export interface Address {
  id: string;
  street: string;
  postalCode: string;
  fullAddress: string;
  city: City |null;
  country: Country|null;
  candidate?: Candidate;
}

