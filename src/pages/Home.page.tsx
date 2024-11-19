import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { ArticleCardList } from '../components/ArticleCard/ArticleCardList';
import userData from '../components/PRUserProfile/userData.json';
import UserProfileCarousel from '@/components/PRUserProfile/PRUserProfileCarousel';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      {/* <ArticleCardList /> */}
      <UserProfileCarousel users={userData} />
    </>
  );
}
