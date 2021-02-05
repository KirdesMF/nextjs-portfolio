import { useRouter } from 'next/router';

export default function Projects() {
   const router = useRouter();
   const { query } = router;
   return <div>{query.project}</div>;
}
