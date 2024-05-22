import './styles.scss';
import { Paper } from 'shared/ui';
import { cx } from '@emotion/css';

export const RatingPage = () => {
  return (
    <Paper className="rating">
      <div className="paper__header">
        <h2 className="paper__title">Рейтинг игроков</h2>
      </div>
      <div className="paper__body">
        <div className="rating-table">
          <div className="rating-table__head">
            <div>Место</div>
            <div>Персонаж</div>
            <div>Количество игр</div>
            <div>Часов в игре</div>
            <div>Последняя игра</div>
            <div>Статус</div>
          </div>
          <div className="rating-table__body">
            {Array(20).fill(null).map((_, index) => {
              const isOnline = Boolean(index % 2);
              return (
                <div key={index} className="rating-table__row">
                  <div>#{index + 1}</div>
                  <div className="rating-table__character">
                    <img src="/steam.svg" alt="steam" />
                    <span>Garik</span>
                  </div>
                  <div>16</div>
                  <div>456</div>
                  <div>16.03.24 12:23</div>
                  <div className={cx('rating-table__status', {
                    online: isOnline
                  })}>
                    {isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*<table className="rating__table">*/}
        {/*  <thead>*/}
        {/*  <tr>*/}
        {/*    <th>Место</th>*/}
        {/*    <th>Персонаж</th>*/}
        {/*    <th>Количество игр</th>*/}
        {/*    <th>Часов в игре</th>*/}
        {/*    <th>Последняя игра</th>*/}
        {/*    <th>Статус</th>*/}
        {/*  </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  {Array(20).fill(null).map(() => {*/}
        {/*    return (*/}
        {/*      <tr>*/}
        {/*        <td>#</td>*/}
        {/*        <td>Garik</td>*/}
        {/*        <td>16</td>*/}
        {/*        <td>456</td>*/}
        {/*        <td>16.03.24 12:23</td>*/}
        {/*        <td className={cx({*/}
        {/*          online: true,*/}
        {/*        })}>Online*/}
        {/*        </td>*/}
        {/*      </tr>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </div>
    </Paper>
  );
};