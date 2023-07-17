import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  reqHasTradeMark,
  reqAddOrUpdateTrademark,
  reqDeleteTrademark
} from '@/api/product/trademark'
import { Button, Card, Space, Table, Tag } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'
import { Records, TradeMarkResponseData } from '@/api/product/trademark/type'
import './styles/index.scss'
interface DataType {
  id: number
  tmName: string
  logoUrl: string
  key: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: '品牌名称',
    dataIndex: 'tmName',
    key: 'tmName',
    align: 'center'
  },
  {
    title: '品牌LOGO',
    key: 'logoUrl',
    render: (_, record) => (
      <>
        <img src={record.logoUrl} alt="" className="w-100px h-100px" />
      </>
    ),
    align: 'center'
  },
  {
    title: '品牌操作',
    render: (_, record) => (
      <>
        <Button type="primary" icon={<EditOutlined />}></Button>
        <Button danger icon={<DeleteOutlined />} className="ml-10px"></Button>
      </>
    ),
    align: 'center'
  }
]

const index = observer(() => {
  const [pageNo, setPageNo] = useState(1)
  const [limit, setLimit] = useState(3)
  const [total, setTotal] = useState(0)
  const [tradeMarkArr, setTradeMarkArr] = useState<Records>([])
  type TablePaginationPosition =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
  const getHasTradeMark = async (pageNo: number, pageSize: number) => {
    let res: TradeMarkResponseData = await reqHasTradeMark(pageNo, pageSize)
    console.log(pageNo)

    if (res.code === 200) {
      setTotal(res.data.total)
      setTradeMarkArr(res.data.records)
    }
  }
  useEffect(() => {
    getHasTradeMark(pageNo, limit)
  }, [pageNo, limit])

  const paginationConfig = {
    pageSize: 3,
    total: total,
    showSizeChanger: true,
    position: ['bottomCenter' as TablePaginationPosition],
    showTotal: (total: any, range: any) =>
      `显示 ${range[0]}-${range[1]} 条，共 ${total} 条`
  }
  const data: any = tradeMarkArr.map((obj, index) => {
    return { ...obj, key: obj.id }
  })
  const handlePaginationChange = (
    pagination: any,
    filters: any,
    sorter: any
  ) => {
    setPageNo(pagination.current)
    setLimit(pagination.pageSize)

    getHasTradeMark(pagination.current, pagination.pageSize)
  }
  return (
    <>
      <Card>
        <Button type="primary" icon={<PlusCircleOutlined />}>
          添加品牌
        </Button>
        <Table
          dataSource={data}
          columns={columns}
          pagination={paginationConfig}
          onChange={handlePaginationChange}
        />
      </Card>
    </>
  )
})

export default index
