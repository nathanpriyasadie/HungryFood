import React, {useState, useEffect} from 'react';
import {CardItemResponse} from '../../components/card';
import {FlatList} from 'react-native';
import {CardItem} from '../../components/card/index';

export interface CardItemListProps {
  limitPerPage?: number;
}

export interface CardItemListActivity {
  loading: boolean;
  endPage: boolean;
}

export default function CardItemList({limitPerPage = 2}: CardItemListProps) {
  const [data, setData] = useState<CardItemResponse[]>([]);
  const [activity, setActivity] = useState<CardItemListActivity>({
    loading: true,
    endPage: false,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    setActivity({...activity, loading: true});

    try {
      const responses = getDataDummyBestRated(page, limitPerPage);

      if (responses.length < limitPerPage) {
        setActivity({loading: false, endPage: true});
      } else {
        setActivity({loading: false, endPage: false});
      }

      setData([...data, ...responses]);
    } catch (error) {}
  }

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.item_id}
      renderItem={({item}) => (
        <CardItem
          shop_id={item.shop_id}
          shop_name={item.shop_name}
          item_id={item.item_id}
          item_name={item.item_name}
          item_price={item.item_price}
          item_discount={item.item_discount}
          item_rating={item.item_rating}
        />
      )}
      // ItemSeparatorComponent={}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (!activity.loading && !activity.endPage) {
          setPage(page + 1);
        }
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

function getDataDummyBestRated(page: number, limitPerPage: number) {
  const minCount = (page - 1) * limitPerPage;
  const maxCount = page * limitPerPage - 1;
  const responses: CardItemResponse[] = [];

  for (
    let index = minCount;
    index < dummyBestRated.length && index <= maxCount;
    index++
  ) {
    responses.push(dummyBestRated[index]);
  }

  return responses;
}

const dummyBestRated: CardItemResponse[] = [
  {
    shop_id: '1',
    shop_name: 'Burger King',
    item_id: '1',
    item_name: 'WHOOPER',
    item_price: 43600,
    item_discount: 20,
    item_rating: 4.7,
  },
  {
    shop_id: '2',
    shop_name: "Carl's Jr",
    item_id: '2',
    item_name: 'BACON KING',
    item_price: 50000,
    item_discount: 20,
    item_rating: 3.7,
  },
  {
    shop_id: '3',
    shop_name: 'Pak Gembus',
    item_id: '3',
    item_name: 'Dada Ayam',
    item_price: 18500,
    item_discount: 15,
    item_rating: 5,
  },
  {
    shop_id: '4',
    shop_name: "Domino's Pizza",
    item_id: '4',
    item_name: 'Meatzza - Beef all around pizza',
    item_price: 44200,
    item_discount: 30,
    item_rating: 4.0,
  },
  {
    shop_id: '5',
    shop_name: 'Soto Ayam Makasar',
    item_id: '5',
    item_name: 'Combo soto ayam',
    item_price: 15600,
    item_discount: 20,
    item_rating: 2.0,
  },
];
