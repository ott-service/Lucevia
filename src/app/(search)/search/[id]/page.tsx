import S from './page.module.css';
import Hashtags from '@/components/Hashtags';
import RelatedActors from '@/components/RelatedActors';
import RelatedCollections from '@/components/RelatedCollections';

export default function SearchResultPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className={S['search-page']}>
      {/* 상단 해시태그 목록 */}
      <Hashtags />

      {/* 검색 결과 */}
      <h2 className={S['search-page__title']}>"{params.id}"의 검색 결과</h2>
      <div className={S['search-page__results']}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={S['search-page__result']}>
              <div className={S['search-page__result-image']}></div>
              <p className={S['search-page__result-title']}>contents title</p>
            </div>
          ))}
      </div>

      {/* 관련된 배우 섹션 */}
      <RelatedActors />

      {/* 관련된 컬렉션 섹션 */}
      <RelatedCollections />
    </div>
  );
}
