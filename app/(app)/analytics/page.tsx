import { PerformanceChart } from "@/components/analytics/performance-chart"
import { ProfitChart } from "@/components/analytics/profit-chart"
import { HoursChart } from "@/components/analytics/hours-chart"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

import data from "@/app/(app)/dashboard/data.json"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track your performance over time</p>
      </div>
    
      <div className="space-y-6">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>

        <PerformanceChart />
        <ProfitChart />
        <HoursChart />
      </div>
    </div>
  )
}
