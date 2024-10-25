import S from './Hashtags.module.css';

export default function Hashtags() {
  const hashtags = [
    '#hashtag1',
    '#hashtag2',
    '#hashtag3',
    '#hashtag4',
    '#hashtag5',
  ];

  return (
    <div className={S['hashtags']}>
      {hashtags.map((tag, index) => (
        <button key={index} className={S['hashtags__item']}>
          {tag}
        </button>
      ))}
    </div>
  );
}
