import Link from 'next/link';
import S from './RelatedCollections.module.css';

export default function RelatedCollections() {
  const collections = [
    {
      title: '비가 오는 날엔 어쩌구...',
      description: '간단한 설명 문구가 여기에 들어갑니다.',
    },
    {
      title: '비가 오는 날엔 어쩌구...',
      description: '간단한 설명 문구가 여기에 들어갑니다.',
    },
  ];

  return (
    <div className={S['related-collections']}>
      {collections.map((collection, index) => (
        <div key={index} className={S['related-collections__item']}>
          <div className={S['related-collections__image']}></div>
          <p className={S['related-collections__title']}>{collection.title}</p>
          <p className={S['related-collections__description']}>
            {collection.description}
          </p>
          <Link href="#" className={S['related-collections__link']}>
            더보기
          </Link>
        </div>
      ))}
    </div>
  );
}
