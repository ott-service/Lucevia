import S from './RelatedActors.module.css';

export default function RelatedActors() {
  const actors = [
    { name: '성이름1', role: '배우, 영화감독' },
    { name: '성이름2', role: '배우, 영화감독' },
    { name: '성이름3', role: '배우, 영화감독' },
  ];

  return (
    <div className={S['related-actors']}>
      {actors.map((actor, index) => (
        <div key={index} className={S['related-actors__actor']}>
          <div className={S['related-actors__actor-image']}></div>
          <p className={S['related-actors__actor-name']}>{actor.name}</p>
          <p className={S['related-actors__actor-role']}>{actor.role}</p>
          <div className={S['related-actors__actor-tags']}>
            {['#tag1', '#tag2', '#tag3'].map((tag, idx) => (
              <button key={idx} className={S['related-actors__actor-tag']}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
