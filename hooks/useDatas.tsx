import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Data } from '_types/locales';

export const useDatas = () => {
   const [data, setData] = useState<Data>(null!);
   const router = useRouter();
   const { locale } = router;

   useEffect(() => {
      const getDatas = async () => {
         const content = (await import(`locales/${locale}.json`)).default;
         setData(content);
      };

      getDatas();
   }, [locale]);

   return data;
};
