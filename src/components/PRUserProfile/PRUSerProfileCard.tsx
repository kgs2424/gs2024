import React, { useState } from 'react';
import { Card, Image, Text, Group, Badge, Button, Collapse } from '@mantine/core';
import { UserProfile } from './user';
import UserProfileModal from './PRUserProfileModal';

interface UserProfileCardProps {
  user: UserProfile;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const [opened, setOpened] = useState(false); 
  const [modalOpened, setModalOpened] = useState(false);

  const handleOpenModal = () => setModalOpened(true);

  return (
    <>
      <Card shadow="sm" padding="lg" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
        <Group>
          <Image src={user.profileImage} alt={user.username} width={80} height={80} radius="50%" />
          <Text>{user.username}</Text>
          <Badge color="blue" size="sm" >{user.jobObjective}</Badge>
          <Text size="md" mt="sm">{user.summary}<br/>
            <Text size="sm" mt="sm">
              최근프로젝트: {user.topics[0].title}
            </Text>
          </Text>
          <Button
            variant="outline"
            fullWidth
            mt="md"
            onClick={(e) => { e.stopPropagation(); setOpened((e) => !e); }} 
          >
            {!opened ? '펼치기':'접기'} 
          </Button>

          <Collapse in={opened}>
            {user.topics.map((project, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <Text size="sm" >{project.title}</Text>
                <Text size="xs" >기간: {project.period}</Text>
                <Text size="xs" >업무: {project.role}</Text>
                <Text size="xs" >
                  사용 기술: {project.technology.join(', ')}
                </Text>
              </div>
            ))}
          </Collapse>
        </Group>
      </Card>

      {/* 모달 */}
      <UserProfileModal
        user={user}
        // opened={modalOpened}
        opened={false}
        onClose={() => setModalOpened(false)}
      />
    </>
  );
};

export default UserProfileCard;
