export type Header = {
  firstName: string
  lastName: string
  role: string
  photoAlt: string
}

export type Profile = {
  title: string
  body: string
}

export type TechSkills = {
  skill: string
  subSkills: string[]
}

export type Skills = {
  title: string
  softSkillsTitle: string
  techSkillsTitle: string
  softSkills: string[]
  techSkills: TechSkills[]
}

export type Degree = {
  title: string
  place: string
  dateRange: string
}

export type Education = {
  title: string
  degrees: Degree[]
}

export type ExperienceEntry = {
  role: string
  dateRange: string
  workPlace: string
  description: string
}

export type Experience = {
  title: string
  entries: ExperienceEntry[]
}

export type LanguageItem = {
  language: string
  level: string
}

export type Languages = {
  title: string
  list: LanguageItem[]
}

export type Interests = {
  title: string
  list: string[]
}

export type Contacts = {
  address: string
  email: string
  phone: string
  website: string
}

export type Data = {
  contacts: Contacts
  header: Header
  profile: Profile
  skills: Skills
  education: Education
  experience: Experience
  languages: Languages
  interests: Interests
}
