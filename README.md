(
echo "# Codebase Dump v0.2.0"
for file in \
'app/(app)/analytics/page.tsx' \
'app/(app)/history/page.tsx' \
'app/(app)/layout.tsx' \
'app/(app)/page.tsx' \
'app/(auth)/auth/callback/route.ts' \
'app/(auth)/auth/page.tsx' \
app/layout.tsx \
components/analytics/hours-chart.tsx \
components/analytics/profit-chart.tsx \
components/analytics/performance-chart.tsx \
components/auth/auth-form.tsx \
components/history/bitcoin-price-display.tsx \
components/history/games-table.tsx \
components/history/week-stats.tsx \
components/layout/navbar.tsx \
components/layout/switch-theme.tsx \
components/start/active-games-list.tsx \
components/start/game-form.tsx \
components/start/session-controller.tsx \
components/logo-symbol.tsx \
components/nav-user.tsx \
lib/services/bitcoin-price.ts \
lib/supabase/admin.ts \
lib/supabase/client.ts \
lib/supabase/server.ts \
lib/utils/date-formatter.ts \
lib/utils/number-formatter.ts 
do
  echo -e "\n\n### $file"
  echo '```ts'
  cat "$file"
  echo '```'
done
) > codebase-v020.md
