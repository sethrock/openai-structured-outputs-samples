// Define components that will be used by the generate_ui tool
// Updates the componentsMap object to map React components to the components defined in config/components-definition.ts

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { getComponent } from '@/lib/components-mapping'
import { addToCart, selectOrder } from '@/config/user-actions'
import { Button } from '@/components/ui/button'
import Image from 'next/image';


const formatKey = (key: string) =>
  key.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_')

const getChartConfig = (columns: { label: string; value: number }[]) => {
  const config: ChartConfig = {}

  columns.forEach((item: { label: string; value: number }) => {
    config[formatKey(item.label)] = {
      label: item.label,
      color: '#ffffff'
    }
  })

  return config
}

const getChartData = (columns: { label?: string; value?: string }[]) => {
  return columns
    .filter(item => !!item.label)
    .map((item: { label?: string; value?: string }, index: number) => {
      if (!item.label) {
        throw new Error('Label is required')
      }
      return {
        id: index,
        label: item.label,
        value: item.value !== undefined ? parseFloat(item.value) : 0,
        fill: '#000000'
      }
    })
}

export const HeaderComponent = ({ content }: { content?: string }) => {
  return (
    <div>
      <h1 className="text-sm text-stone-900 font-medium">{content}</h1>
    </div>
  )
}

export const BarChartComponent = ({
  columns
}: {
  columns?: { label?: string; value?: string }[]
}) => {
  if (!columns) return null
  const chartData = getChartData(columns)
  const chartConfig = getChartConfig(chartData)
  return (
    <ChartContainer config={chartConfig} className="">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis orientation="left" width={24} />
        <Bar dataKey="value" fill="#1A535C" radius={6} barSize={30} />
      </BarChart>
    </ChartContainer>
  )
}

export const TableComponent = ({
  columns,
  rows
}: {
  columns?: { key?: string; title?: string }[]
  rows?: any[]
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        {columns?.map((column, index) => (
          <TableHead key={index}>{column.title}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows?.map((row, index) => (
        <TableRow key={index}>
          {row.values?.map((value: string, index: number) => (
            <TableCell key={index}>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export const ItemComponent = ({
  id,
  item_name,
  primary_image,
  description,
  price,
  duration,
  video
}: {
  id: string
  item_name: string
  primary_image: string
  description: string
  price: number
  duration?: number
  video?: string
}) => {
  React.useEffect(() => {
    if (video && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://player.cloudinary.com/v2.0/global/all.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const player = (window as any).cloudinary.videoPlayer('player', {
          cloud_name: 'dq2wjozdk',
          publicId: 'Naked_Sushi_-540p30_gxtv7r',
          profile: 'lopping2'
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [video]);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg w-72 min-w-72 h-[400px] relative overflow-hidden">
      {video ? (
        <video
          id="player"
          className="absolute inset-0 w-full h-full object-cover"
          controls
          playsInline
        />
      ) : (
        <>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${primary_image || '/imgs/service.jpg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </>
      )}
      <div className="relative z-10 flex flex-col items-center text-white">
        <h3 className="text-lg font-semibold mb-2">{item_name}</h3>
        <p className="text-sm text-gray-600 mb-2">{duration} Hour Service</p>
        <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
        <p className="text-lg font-bold">${price}</p>
        <Button onClick={() => addToCart(id)} className="mt-4 bg-white text-black hover:bg-gray-200">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export const OrderComponent = ({ id, total, date, status, products }: any) => (
  <div className="flex flex-col gap-2 mb-3">
    <div className="flex flex-col justify-between rounded-lg border bg-white p-4 w-96 h-72 flex-shrink-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-gray-800">
          <div className="flex items-center gap-2">
            Order <span className="font-semibold"> #{id ?? ''} </span>
          </div>
          <div className="text-xs border border-gray-500 rounded-md px-1.5 py-0.5 text-gray-500">
            {status ?? ''}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-500">{date ?? ''}</div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {products?.map((product: any, index: number) => (
            <div className="flex items-center gap-2" key={index}>
              <div className="aspect-h-1 aspect-w-1 w-16 h-16 overflow-hidden rounded-lg bg-gray-100 border border-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {product.item?.primary_image &&
                product.item.primary_image.match(
                  /\.(jpeg|jpg|gif|png|webp)$/
                ) ? (
                  <img
                    src={`/imgs/${product.item.primary_image}`}
                    alt={product.item.item_name}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="animate-pulse bg-gray-200 h-full w-full"></div>
                )}
              </div>

              <div className="text-xs text-gray-600 flex-1 text-ellipsis text-nowrap overflow-hidden">
                <span className="text-ellipsis">
                  {product.item?.item_name ?? ''}
                </span>
                <span className="font-semibold ml-1">
                  x {product.quantity ?? ''}
                </span>
              </div>
              <div className="text-xs font-semibold text-gray-800">
                $ {product.item?.price ?? ''}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-gray-500 font-semibold">Total</div>
        <div className="font-medium text-gray-900 ">$ {total}</div>
      </div>
    </div>
    <div className="flex justify-start">
      <Button size="sm" onClick={() => selectOrder(id)}>
        Select order
      </Button>
    </div>
  </div>
)

export const CardComponent = ({ children }: { children?: any[] }) => (
  <div className="flex flex-col w-full bg-white rounded-lg p-4 shadow-md mt-2">
    {children ? (
      <div className="flex flex-col gap-4">
        {children.map((child: any, index: number) => (
          <React.Fragment key={index}>{getComponent(child)}</React.Fragment>
        ))}
      </div>
    ) : null}
  </div>
)

export const CarouselComponent = ({ children }: { children?: any[] }) => (
  <div className="flex space-x-2 overflow-x-scroll w-full">
    {children
      ? children.map((child: any, index: number) => (
          <React.Fragment key={index}>{getComponent(child)}</React.Fragment>
        ))
      : null}
  </div>
)

export const componentsMap = {
  card: CardComponent,
  carousel: CarouselComponent,
  bar_chart: BarChartComponent,
  header: HeaderComponent,
  table: TableComponent,
  item: ItemComponent,
  order: OrderComponent
  // update componentsMap to match components passed to generate_ui
}