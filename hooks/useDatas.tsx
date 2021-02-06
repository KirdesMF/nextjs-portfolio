import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Data } from '_types/locales';

export const useDatas = () => {
   const [data, setData] = useState<Data>(null!);
   const router = useRouter();
   const { locale } = router;

   useEffect(() => {
      const getDatas = async () => {
         try {
            const content: Data = (await import(`locales/${locale}.json`))
               .default;
            setData(content);
         } catch (err) {
            console.log(err);
         } finally {
            console.log('done');
         }
      };

      getDatas();
   }, [locale]);

   return data;
};
