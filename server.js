const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const dashboardData = {
  alerts: 3,
  pendingRecords: 5,
  todayEvents: 2,
  latestNotices: 1,
};

const riskList = [
  { id: 'E00012', name: '陳阿姨', level: '高風險', issue: '血壓過高', updatedAt: '2024-05-20 09:30' },
  { id: 'E00018', name: '李大同', level: '高風險', issue: '血糖過高', updatedAt: '2024-05-20 08:45' },
  { id: 'E00025', name: '張秀英', level: '注意', issue: '體重過高', updatedAt: '2024-05-20 10:15' },
];

const announcements = [
  { title: '系統維護', message: '5/25 (六) 02:00~04:00，請提前儲存資料。' },
  { title: '月例報表', message: '5月健康追蹤數據已更新。' },
  { title: '宣導活動', message: '5/18 長者健康講座已完成。' },
];

const cases = [
  { code: 'C-2045', name: '長者用藥監測', status: '進行中', owner: '張先生', due: '2026-05-29' },
  { code: 'C-2046', name: '社會資源連結', status: '待處理', owner: '李小姐', due: '2026-05-30' },
  { code: 'C-2047', name: '健康追蹤訪視', status: '已完成', owner: '陳先生', due: '2026-05-25' },
];

app.use(express.static(path.join(__dirname)));

app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

app.get('/api/risk-list', (req, res) => {
  res.json(riskList);
});

app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

app.get('/api/cases', (req, res) => {
  res.json(cases);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
