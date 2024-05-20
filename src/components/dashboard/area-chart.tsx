import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'يناير',
    monthlyIncome: 2890,
  },
  {
    date: 'فبراير',
    monthlyIncome: 2756,
  },
  {
    date: 'مارس',
    monthlyIncome: 3322,
  },
  {
    date: 'ابريل',
    monthlyIncome: 3470,
  },
  {
    date: 'مايو',
    monthlyIncome: 3475,
  },
  {
    date: 'يونيو',
    monthlyIncome: 3129,
  },
  {
    date: 'يوليو',
    monthlyIncome: 3490,
  },
  {
    date: 'اغسطس',
    monthlyIncome: 2903,
  },
  {
    date: 'سبتمبر',
    monthlyIncome: 2643,
  },
  {
    date: 'اكتوبر',
    monthlyIncome: 2837,
  },
  {
    date: 'نوفمبر',
    monthlyIncome: 2954,
  },
  {
    date: 'ديسيمبر',
    monthlyIncome: 3452,
  },
];

const dataFormatter = (number: any) => `${Intl.NumberFormat('us').format(number).toString()} جنية`;

export function AreaChartHero() {
  return (
    <AreaChart
      className='h-80'
      data={chartdata}
      showLegend={false}
      index='date'
      categories={['monthlyIncome']}
      colors={['green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      customTooltip={(props) => {
        const { payload, active, label } = props;
        if (!active || !payload) return null;
        return (
          <div className='w-56 rounded-tremor-default border border-tremor-border bg-tremor-background px-0 p-2 text-tremor-default shadow-tremor-dropdown'>
            {payload.map((category, idx) => (
              <div className='flex flex-col' key={idx}>
                <p className='border-b p-2 font-medium'>{label}</p>
                <p className='p-2 text-tremor-content'>الارباح الشهرية: {dataFormatter(category.value?.toString())}</p>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
}
