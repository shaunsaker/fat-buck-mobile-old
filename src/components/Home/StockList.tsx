import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { StockButton } from './StockButton';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreStocks } from '../../store/actions';
import {
  selectStocks,
  selectStocksLoading,
  selectStocksHasMoreData,
} from '../../stocks/selectors';
import { Stock } from '../../stocks/models';
import Animator from 'react-native-simple-animators';
import { colors } from '../../colors';

const StockListContainer = styled.View`
  flex: 1;
`;

const StockListLabelsContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 3px;
  border-color: ${colors.transWhite};
  border-style: solid;
`;

const StockListItemContainer = styled.View`
  height: 50px;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${colors.transWhite};
  border-style: solid;
`;

const StockListLoaderContainer = styled.View``;

const StockListLoaderRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom-width: 3px;
  border-color: ${colors.transWhite};
  border-style: solid;
`;

const StockListItemLoader = styled.View`
  height: 25px;
  background-color: ${colors.transWhite};
  border-radius: 20px;
`;

interface StockListLabels {
  [key: string]: { label: string; style: any }; // FIXME: any
}

export const STOCK_LIST_COLUMNS: StockListLabels = {
  name: {
    label: 'Name',
    style: { flex: 0.67, marginRight: 10 },
  },
  instruction: {
    label: 'Instruction',
    style: {
      flex: 1,
      marginRight: 10,
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  health: {
    label: 'Health',
    style: {
      flex: 1,
      marginRight: 10,
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  return: {
    label: 'Return %',
    style: {
      alignItems: 'flex-end',
      textAlign: 'right',
      width: 70,
    },
  },
};

interface StockListLoaderProps {
  itemsToRender?: number;
}

const StockListLoader = ({ itemsToRender = 3 }: StockListLoaderProps) => {
  return (
    <StockListLoaderContainer>
      {[...Array(itemsToRender).keys()].map((key) => (
        <Animator
          key={key}
          type="opacity"
          initialValue={0.25}
          finalValue={0.75}
          duration={600}
          shouldAnimateIn
          shouldRepeat>
          <StockListLoaderRowContainer>
            {Object.keys(STOCK_LIST_COLUMNS).map((itemKey) => (
              <StockListItemLoader
                key={itemKey}
                style={STOCK_LIST_COLUMNS[itemKey].style}
              />
            ))}
          </StockListLoaderRowContainer>
        </Animator>
      ))}
    </StockListLoaderContainer>
  );
};

interface StockListBaseProps {
  stocks: Stock[];
  isLoading: boolean;
  handleStockPress: (symbol: Stock) => void;
  handleEndReached: () => void;
}

const StockListBase = ({
  stocks,
  isLoading,
  handleStockPress,
  handleEndReached,
}: StockListBaseProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Stock }) => (
      <StockListItemContainer>
        <StockButton
          name={item.symbol}
          instruction={item.valuation.instruction}
          health={item.valuation.health}
          expectedReturn={Math.round(item.valuation.expectedReturn)}
          onPress={() => handleStockPress(item)}
        />
      </StockListItemContainer>
    ),
    [handleStockPress],
  );

  return (
    <StockListContainer>
      <StockListLabelsContainer>
        {Object.keys(STOCK_LIST_COLUMNS).map((key) => (
          <Label
            key={key}
            kind={LabelKinds.secondary}
            style={STOCK_LIST_COLUMNS[key].style}>
            {STOCK_LIST_COLUMNS[key].label}
          </Label>
        ))}
      </StockListLabelsContainer>

      {stocks ? (
        <FlatList
          data={stocks}
          keyExtractor={(item) => item.symbol}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.33}
          ListFooterComponent={
            isLoading ? <StockListLoader itemsToRender={3} /> : null
          }
        />
      ) : (
        <StockListLoader />
      )}
    </StockListContainer>
  );
};

export const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(selectStocks);
  const isLoading = useSelector(selectStocksLoading);
  const hasMoreData = useSelector(selectStocksHasMoreData);

  const onStockPress = useCallback(() => {}, []);

  const onEndReached = useCallback(() => {
    if (!isLoading && hasMoreData) {
      dispatch(fetchMoreStocks());
    }
  }, [dispatch, isLoading, hasMoreData]);

  return (
    <StockListBase
      stocks={stocks}
      isLoading={isLoading}
      handleStockPress={onStockPress}
      handleEndReached={onEndReached}
    />
  );
};
