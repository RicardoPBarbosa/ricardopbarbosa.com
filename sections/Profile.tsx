import { FC } from 'react'

import { Profile as ProfileData } from 'types/data'

import Body from 'components/Body'
import SectionTitle from 'components/SectionTitle'

const Profile: FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="profile-area">
      <SectionTitle>{data.title}</SectionTitle>
      <Body>{data.body}</Body>
    </div>
  )
}

export default Profile
