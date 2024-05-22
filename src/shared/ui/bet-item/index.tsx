import './styles.scss';
import type { FunctionComponent, HTMLAttributes } from 'react';
import { cx } from '@emotion/css';
import { useCryptoContext, useUserContext } from 'shared/hooks';
import { format } from 'date-fns';
import type { Bet } from 'typings/bet';

type BetItemProps = Bet & HTMLAttributes<HTMLDivElement>

export const BetItem: FunctionComponent<BetItemProps> = (props) => {
  const { currency } = useCryptoContext();
  const { username } = useUserContext();

  return (
    <div className={cx('bet-item', props.className)}>
      <div className="bet-item__game-icon bet-item__game-icon_dota" />
      <div className="bet-item__user-info user-info">
        <span className="user-info__name">{props.username ?? username}-</span>
        <span className="user-info__game-date">
          {format(props.created_at, 'Создана в H:mm, dd MMMM yyyy г.')}
        </span>
      </div>
      <div className="bet-item__game-bet game-bet">
        <span className="game-bet__bet">
          <span className="game-bet__subtitle">Ставка</span>
          <span>{+props.price} {currency}</span>
        </span>
        {!props.is_active
          ? (
            <span className="game-bet__result">
              <span className="game-bet__subtitle">{props.result_bet === 'Prop' ? 'Проигрыш' : 'Выигрыш'}</span>
              <span className={cx('game-bet__result', {
                negative: props.result_bet === 'Prop',
              })}>{props.potential_win} {currency}</span>
            </span>
          ) : (
            <span className="game-bet__result">
              <span className="game-bet__subtitle">Потенциальный выигрыш</span>
              <span className="game-bet__result">{+props.potential_win} {currency}</span>
            </span>
          )}
      </div>
    </div>
  );
};
