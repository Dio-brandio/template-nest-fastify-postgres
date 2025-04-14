import {
  GENDER,
  SESSIONTYPEPREFERENCE,
  SIGNS,
  SPECIFICGOALS,
  THERAPISTPREFEREDLANGUAGES,
  WHATBRINGSYOUHERETODAY,
} from '@constants';
import { AuditFieldsDTO } from './common.dtos';

export interface UserDetailsPreferencesDTO extends AuditFieldsDTO {
  userId: string;
  previouslySeenTherapist: boolean;
  preferedTherapistGender: GENDER[];
  preferedTherapiLanguage: THERAPISTPREFEREDLANGUAGES[];
  whatBringsYouToTherapyToday: WHATBRINGSYOUHERETODAY[];
  specificGoalsForTherapy: SPECIFICGOALS[];
  currentlyExperiencingSigns: SIGNS[];
  therapiSessionPreference: SESSIONTYPEPREFERENCE[];
}
