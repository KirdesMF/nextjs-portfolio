import Layout from '@components/Layout/Layout';
import LinkPages from '@components/LinkPages/LinkPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';

const spanArray = [
   { content: 'Hi, I’m Cédric,' },
   { content: 'a Freelance web developer,' },
   { content: 'living in France, near Paris.' },
   { content: 'I love to create websites, apps' },
   { content: 'and everything related to the web.' },
];

const title = 'Ced | About';
const contentBtn = 'Skills set';
const mainTitle = 'about';
const href = '/about/skills';

export default function About() {
   return (
      <Layout name="about" title={title}>
         <ResumePages spans={spanArray} />
         <MaintTitle title={mainTitle} />
         <LinkPages href={href} content={contentBtn} />
      </Layout>
   );
}
