import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './ArticleCard.module.css';

interface ArticleCardProps {
    profileImage : string; // 이미지
    jobObjective : string; // 희망 분야
    topic : string; // 이력서 소주제
    summary : string; // 한줄 소개
    username : string; // 이름
}

export function ArticleCard({profileImage, jobObjective, topic, summary, username}:ArticleCardProps) {
  const linkProps = { href: 'https://naver.com', target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          {/* <Image src="https://i.imgur.com/Cij5vdL.png" height={180} /> */}
          <Image src={profileImage} height={180} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {/* 희망 분야 ( 프론트엔드, 백엔드, 풀스택, 리액트, 뷰, 자바 등등 )<br/> */}
        {jobObjective}
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {/* 이력서 소주제1 topic<br/> */}
        {topic}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {/* 한줄 자기소개1 summary<br/> */}
        {summary}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
            // 미니프로필 이미지
          />
          <Text fz="sm" inline>
            사용자1 name<br/>
            {username}
          </Text>
        </Center>
        
        {/* 좋아요 알림 공유 */}
        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}