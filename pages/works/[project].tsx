import { Layout } from '@components/Layout/Layout';
import { useRouter } from 'next/router';

export default function Projects() {
   const router = useRouter();
   const { query } = router;
   return <Layout name="works">{query.project}</Layout>;
}
