enum AUDITTYPES {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  READ = 'READ',
}

enum USERSTATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  BLOCKED = 'blocked',
  PENDING = 'pending',
  INVITED = 'invited',
  ONBOARDED = 'onboarded',
  BLACKLIST = 'blacklist',
}

enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
}

enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  NONBINARY = 'non-binary',
  NOPREFRENCE = 'No preference',
}

export { AUDITTYPES, USERSTATUS, ROLE, GENDER };
