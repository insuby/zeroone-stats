import './styles.scss';
import { Paper } from 'shared/ui';
import { cx } from '@emotion/css';

export const StatsPage = () => {
  return (
    <div className="stats">
      <div className="stats-profile">
        <div className="stats-profile__info">
          <div className="stats-profile__avatar">
            <img src="/avatar.png" alt="avatar" />
          </div>
          <div className="stats-profile__name">Devchonka</div>
          <div className="stats-profile__id">ID 12333333</div>
        </div>
        <div className="stats-profile__stat">
          <span>Кол-во игр</span>
          <span>32</span>
        </div>
        <div className="stats-profile__stat">
          <span>Кол-во часов в игре</span>
          <span>32</span>
        </div>
        <div className="stats-profile__stat">
          <span>Дата регистрации</span>
          <span>16.10.23</span>
        </div>
      </div>
      <Paper>
        <div className="paper__header">
          <h2 className="paper__title">Моя статистика</h2>
        </div>
        <div className="paper__body">
          <div className="stats-table">
            <div className="stats-table__head">
              <div>Время</div>
              <div>Персонаж</div>
              <div>Статус</div>
              <div>Длительность</div>
              <div>Польза</div>
              <div>Похвала</div>
              <div>Противники</div>
            </div>
            <div className="stats-table__body">
              {Array(20).fill(null).map((_, index) => {
                const hasWon = Boolean(index % 2);
                return (
                  <div key={index} className="stats-table__row">
                    <div>16.10.24 16:05</div>
                    <div className="stats-table__character">
                      <img src="/avatar.png" alt="avatar" />
                      <span>Garik</span>
                    </div>
                    <div className={cx('stats-table__status', {
                      'has-won': hasWon,
                    })}>
                      {hasWon ? 'Выйграл' : 'Проиграл'}
                    </div>
                    <div>46 мин</div>
                    <div>64%</div>
                    <div>15</div>
                    <div className="stats-table__opponents">
                      <div className="stats-table__opponent">
                        <img src="/avatar.png" alt="avatar" />
                      </div>
                      <div className="stats-table__opponent">
                        <img src="/avatar.png" alt="avatar" />
                      </div>
                      <div className="stats-table__opponent">
                        <img src="/avatar.png" alt="avatar" />
                      </div>
                      <div className="stats-table__opponent">
                        <img src="/avatar.png" alt="avatar" />
                      </div>
                      <div className="stats-table__opponent">
                        <img src="/avatar.png" alt="avatar" />
                      </div>
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
    </div>
  );
};