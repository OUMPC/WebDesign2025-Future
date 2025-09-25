import React, { useState } from 'react';
import { Home, Calendar, Star, GraduationCap, Users, Bell, Search, Menu, X, ChevronRight, TrendingUp, Award, Clock, MapPin, Filter } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'events', label: 'Sự kiện', icon: Calendar },
    { id: 'scores', label: 'Điểm rèn luyện', icon: Star },
    { id: 'scholarships', label: 'Học Bổng', icon: GraduationCap },
    { id: 'clubs', label: 'Câu Lạc Bộ', icon: Users }
  ];

  // Sample data with correct ĐRL structure
  const events = [
    {
      id: 1,
      title: "Workshop AI & Machine Learning",
      date: "25/10/2024",
      time: "14:00",
      location: "Hội trường 602, 97 Võ Văn Tần",
      points: 3,
      category: "Học tập",
      status: "open",
      tags: ["Điều 2", "Học Kỳ I", "Offline"]
    },
    {
      id: 2, 
      title: "Hiến máu nhân đạo",
      date: "28/10/2024",
      time: "08:00", 
      location: "Hội trường 602, 97 Võ Văn Tần",
      points: 5,
      category: "Cộng đồng",
      status: "open",
      tags: ["Điều 4", "Học Kỳ I", "Offline"]
    },
    {
      id: 3,
      title: "Webinar Khởi nghiệp",
      date: "30/10/2024", 
      time: "19:00",
      location: "Online",
      points: 1,
      category: "Học tập",
      status: "open",
      tags: ["Điều 2", "Học Kỳ II", "Online"]
    },
    {
      id: 4,
      title: "Tình nguyện mùa hè xanh",
      date: "02/11/2024",
      time: "07:00",
      location: "Hội trường 602, 97 Võ Văn Tần",
      points: 5,
      category: "Cộng đồng",
      status: "open",
      tags: ["Điều 3", "Học Kỳ I", "Offline"]
    }
  ];

  const scholarships = [
    {
      id: 1,
      title: "HỌC BỔNG TUYỂN SINH SAU ĐẠI HỌC",
      icon: "👨‍💼",
      color: "bg-gray-900"
    },
    {
      id: 2,
      title: "HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP ĐẠI HỌC CHÍNH QUY",
      icon: "🎓",
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "HỌC BỔNG SINH VIÊN LÀM THEO LỜI BÁC",
      icon: "📋",
      color: "bg-green-700"
    },
    {
      id: 4,
      title: "HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP ĐÀO TẠO TỪ XA",
      icon: "👥",
      color: "bg-red-900"
    },
    {
      id: 5,
      title: "HỌC BỔNG TUYỂN SINH ĐẠI HỌC CHÍNH QUY",
      icon: "🎯",
      color: "bg-pink-600"
    },
    {
      id: 6,
      title: "HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP KHOA ĐÀO TẠO ĐẶC BIỆT",
      icon: "🎓",
      color: "bg-orange-500"
    },
    {
      id: 7,
      title: "HỌC BỔNG SINH VIÊN 5 TỐT",
      icon: "🌀",
      color: "bg-cyan-500"
    },
    {
      id: 8,
      title: "HỌC BỔNG TÀI NĂNG",
      icon: "⭐",
      color: "bg-yellow-500"
    },
    {
      id: 9,
      title: "HỌC BỔNG CỰU NGƯỜI HỌC",
      icon: "🎓",
      color: "bg-purple-700"
    },
    {
      id: 10,
      title: "HỌC BỔNG VƯỢT KHÓ ĐẠI HỌC CHÍNH QUY",
      icon: "📊",
      color: "bg-blue-500"
    },
    {
      id: 11,
      title: "HỌC BỔNG NGHIÊN CỨU KHOA HỌC SINH VIÊN",
      icon: "⚛️",
      color: "bg-cyan-400"
    },
    {
      id: 12,
      title: "HỌC BỔNG VƯỢT KHÓ ĐÀO TẠO TỪ XA",
      icon: "🏃‍♂️",
      color: "bg-red-600"
    },
    {
      id: 13,
      title: "HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP DÀNH CHO NGHÈO CỰC NGHÈO",
      icon: "🎁",
      color: "bg-green-600"
    },
    {
      id: 14,
      title: "HỌC BỔNG TIẾP SỨC ĐẾN TRƯỜNG ĐẠI HỌC CHÍNH QUY",
      icon: "🚶‍♂️",
      color: "bg-teal-700"
    },
    {
      id: 15,
      title: "HỌC BỔNG KHUYẾN KHÍCH NÂNG CAO NĂNG LỰC TIẾNG ANH",
      icon: "🎭",
      color: "bg-purple-600"
    },
    {
      id: 16,
      title: "HỌC BỔNG DOANH NGHIỆP",
      icon: "💼",
      color: "bg-gray-800"
    }
  ];

  const clubs = [
    {
      id: 1,
      name: "CLB Lập trình",
      category: "Công nghệ",
      description: "Cộng đồng đam mê coding và công nghệ",
      tags: ["Programming", "Tech", "Innovation"]
    },
    {
      id: 2,
      name: "CLB Guitar", 
      category: "Nghệ thuật",
      description: "Nơi chia sẻ đam mê âm nhạc và guitar",
      tags: ["Music", "Guitar", "Performance"]
    },
    {
      id: 3,
      name: "CLB Tình nguyện",
      category: "Cộng đồng",
      description: "Hoạt động thiện nguyện, giúp đỡ cộng đồng",
      tags: ["Volunteer", "Community", "Social"]
    },
    {
      id: 4,
      name: "CLB Bóng đá",
      category: "Thể thao",
      description: "Đội bóng đá sinh viên, tham gia các giải đấu",
      tags: ["Football", "Sports", "Tournament"]
    }
  ];

  // Homepage Component
  const HomePage = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">Cổng thông tin sinh viên OU</h1>
          <p className="text-blue-100 mb-6">Theo dõi điểm rèn luyện, khám phá cơ hội Học Bổng và tham gia các hoạt động bổ ích</p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveTab('scores')}
              className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Xem điểm rèn luyện
            </button>
            <button 
              onClick={() => setActiveTab('events')}
              className="border border-blue-300 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Tìm sự kiện
            </button>
          </div>
        </div>
      </div>

      {/* 35th Anniversary Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 rounded-full opacity-10 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-300 rounded-full opacity-10 translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-blue-900">35</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Kỷ Niệm 35 Năm Thành Lập</h2>
              <p className="text-blue-200 text-sm">Trường Đại học Mở TP.HCM (1990 - 2025)</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-blue-100 leading-relaxed mb-4">
              35 năm kiên trì và phát triển, OU đã trở thành ngôi trường tiên phong trong giáo dục mở, 
              đào tạo hàng trăm nghìn sinh viên và góp phần xây dựng nguồn nhân lực chất lượng cao cho đất nước.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">300K+</div>
                <div className="text-xs text-blue-200">Cựu sinh viên</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">50K+</div>
                <div className="text-xs text-blue-200">Sinh viên hiện tại</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">100+</div>
                <div className="text-xs text-blue-200">Chương trình đào tạo</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h3 className="font-semibold mb-2 text-cyan-300">Thông điệp kỷ niệm</h3>
            <p className="text-sm text-blue-100 italic">
              "Cùng nhau viết tiếp câu chuyện phát triển, hướng tới tương lai giáo dục hiện đại và bền vững"
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Star className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">78</span>
          </div>
          <p className="text-gray-600 text-sm">Điểm rèn luyện</p>
          <p className="text-green-600 text-xs font-medium">+12 điểm tuần này</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-900">4</span>
          </div>
          <p className="text-gray-600 text-sm">Sự kiện tuần này</p>
          <p className="text-blue-600 text-xs font-medium">Tất cả đang mở đăng ký</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <GraduationCap className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <p className="text-gray-600 text-sm">Học Bổng mở</p>
          <p className="text-orange-600 text-xs font-medium">2 học bổng đang mở</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Users className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-900">4</span>
          </div>
          <p className="text-gray-600 text-sm">Câu Lạc Bộ tham gia</p>
          <p className="text-green-600 text-xs font-medium">2 hoạt động mới</p>
        </div>
      </div>

      {/* Deadline Alert */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Deadline sắp tới
            </h3>
            <p className="text-orange-100">Học Bổng khuyến khích học tập</p>
            <p className="text-orange-100 text-sm">Hạn nộp: 15/11/2024 - Còn lại 12 ngày</p>
          </div>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            Xem chi tiết
          </button>
        </div>
      </div>

      {/* OU 35 Years History & Achievements */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">OU</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">OU 35 NĂM - LỊCH SỬ & THÀNH TỰU</h2>
            <p className="text-gray-600">Hành trình phát triển và những cột mốc đáng tự hào</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* History Timeline */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <span className="mr-2">📅</span>LỊCH SỬ PHÁT TRIỂN
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-8 bg-blue-600 text-white text-xs font-bold rounded flex items-center justify-center">1990</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">Thành lập Trường Đại học Mở TP.HCM (15/6/1990) - Mô hình giáo dục mở đầu tiên VN</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-16 h-8 bg-purple-600 text-white text-xs font-bold rounded flex items-center justify-center">1993</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">Chuyển mô hình đại học bán công, mở rộng quy mô đào tạo</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-16 h-8 bg-green-600 text-white text-xs font-bold rounded flex items-center justify-center">2006</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">Trở thành trường đại học công lập, tăng cường chất lượng</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-16 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded flex items-center justify-center">2025</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 font-medium">Kỷ niệm 35 năm với nhiều thành tựu đáng tự hào</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <span className="mr-2">🏆</span>THÀNH TỰU NỔI BẬT
            </h3>
            
            <div className="space-y-4">
              {/* Scale */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">📊 QUY MÔ</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="font-bold text-blue-700">13</span> Khoa đào tạo</div>
                  <div><span className="font-bold text-blue-700">71</span> Chương trình</div>
                  <div><span className="font-bold text-blue-700">300K+</span> Cử nhân</div>
                  <div><span className="font-bold text-blue-700">40%</span> Giảng viên TS</div>
                </div>
              </div>

              {/* Rankings */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🌍 XẾP HẠNG</h4>
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">QS Asia:</span> 701-750 (2025)</div>
                  <div><span className="font-medium">THE World:</span> 1001-1500</div>
                  <div><span className="font-medium">SCImago:</span> Top 20 VN</div>
                </div>
              </div>

              {/* Research & Students */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2 text-sm">🔬 NGHIÊN CỨU</h4>
                  <div className="text-xs space-y-1">
                    <div><span className="font-bold">200+</span> Công trình KH</div>
                    <div><span className="font-bold">100+</span> Bằng sáng chế</div>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm">💼 SINH VIÊN</h4>
                  <div className="text-xs space-y-1">
                    <div><span className="font-bold">95%</span> Có việc làm</div>
                    <div><span className="font-bold">25+</span> Đối tác quốc tế</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Message to University */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">💌 Gửi Lời Cảm Nhận Đến Trường</h2>
          <p className="text-gray-600">Chia sẻ cảm xúc, kỷ niệm và lời chúc mừng nhân dịp 35 năm thành lập OU</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Bạn là</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sinh viên hiện tại</option>
                <option>Cựu sinh viên</option>
                <option>Giảng viên</option>
                <option>Cán bộ nhân viên</option>
                <option>Phụ huynh</option>
                <option>Khác</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Lời cảm nhận của bạn</label>
              <textarea
                rows="4"
                placeholder="Chia sẻ cảm xúc, kỷ niệm đẹp, lời chúc mừng hoặc mong muốn dành cho OU nhân dịp 35 năm thành lập..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Lời cảm nhận sẽ được xem xét và có thể được chia sẻ trên website
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300">
                Gửi lời cảm nhận
              </button>
            </div>
          </div>

          {/* Sample messages */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/50">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">SV</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Nguyễn Văn A</p>
                  <p className="text-xs text-gray-600">Sinh viên K47</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">"OU đã cho em những năm tháng đẹp nhất. Chúc mừng trường 35 tuổi!"</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/50">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">CV</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Trần Thị B</p>
                  <p className="text-xs text-gray-600">Cựu sinh viên K40</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">"Cảm ơn OU đã cho em nền tảng để thành công như hôm nay!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="h-5 w-5 text-blue-600 mr-2" />
            Thông báo mới
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Mở đăng ký Học Bổng khuyến khích học tập</p>
                <p className="text-xs text-gray-600">2 giờ trước</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Workshop AI đã được duyệt +3 điểm rèn luyện</p>
                <p className="text-xs text-gray-600">1 ngày trước</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            Hoạt động gần đây
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Workshop Kỹ năng mềm</p>
                <p className="text-xs text-gray-600">22/10/2024 • Điều 2</p>
              </div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">+3 điểm</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Tình nguyện mùa hè</p>
                <p className="text-xs text-gray-600">20/10/2024 • Điều 3</p>
              </div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">+5 điểm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Events Page Component
  const EventsPage = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sự kiện..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Tất cả điều</option>
              <option>Điều 1</option>
              <option>Điều 2</option>
              <option>Điều 3</option>
              <option>Điều 4</option>
              <option>Điều 5</option>
            </select>
            <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Tất cả học kỳ</option>
              <option>Học Kỳ I</option>
              <option>Học Kỳ II</option>
              <option>Học Kỳ III</option>
            </select>
            <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Online/Offline</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
          </div>
        </div>
        
        {/* Tag Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
            Điều 1
          </button>
          <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
            Điều 2  
          </button>
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
            Điều 3
          </button>
          <button className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
            Điều 4
          </button>
          <button className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
            Điều 5
          </button>
          <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            Online
          </button>
          <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            Offline
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.category === 'Học tập' ? 'bg-blue-100 text-blue-700' : 
                  event.category === 'Cộng đồng' ? 'bg-green-100 text-green-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {event.category}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  event.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {event.status === 'open' ? 'Mở' : 'Đầy'}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date} - {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {event.points} điểm
                </div>
              </div>

              {/* Event Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {event.tags.map((tag, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tag.includes('Điều 1') ? 'bg-blue-100 text-blue-700' :
                    tag.includes('Điều 2') ? 'bg-purple-100 text-purple-700' :
                    tag.includes('Điều 3') ? 'bg-green-100 text-green-700' :
                    tag.includes('Điều 4') ? 'bg-orange-100 text-orange-700' :
                    tag.includes('Điều 5') ? 'bg-pink-100 text-pink-700' :
                    tag === 'Online' ? 'bg-blue-50 text-blue-600' :
                    tag === 'Offline' ? 'bg-green-50 text-green-600' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  event.status === 'open' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={event.status !== 'open'}
              >
                {event.status === 'open' ? 'Đăng ký' : 'Đã đầy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Scores Page Component
  const ScoresPage = () => (
    <div className="space-y-6">
      {/* Current Score Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Điểm rèn luyện hiện tại</h2>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">78</span>
              <span className="text-xl ml-2 opacity-80">/100</span>
            </div>
            <p className="text-blue-200 mt-2">Xếp loại: <span className="font-semibold text-yellow-300">Tốt</span></p>
            <p className="text-blue-200 text-sm">Cần thêm 12 điểm để đạt Xuất sắc</p>
          </div>
          <div className="relative">
            <div className="w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                <circle 
                  cx="60" cy="60" r="50" 
                  stroke="#FCD34D" 
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${78 * 3.14} ${(100-78) * 3.14}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Breakdown by Điều */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { title: 'Điều 1', score: 15, max: 20, color: 'bg-blue-500' },
          { title: 'Điều 2', score: 20, max: 25, color: 'bg-purple-500' },
          { title: 'Điều 3', score: 18, max: 20, color: 'bg-green-500' },
          { title: 'Điều 4', score: 20, max: 25, color: 'bg-orange-500' },
          { title: 'Điều 5', score: 5, max: 10, color: 'bg-pink-500' }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
            <div className="flex items-baseline mb-3">
              <span className="text-2xl font-bold text-gray-900">{item.score}</span>
              <span className="text-gray-500 ml-1">/{item.max}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full ${item.color} transition-all duration-700`}
                style={{ width: `${(item.score / item.max) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600">{Math.round((item.score / item.max) * 100)}%</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Hành động nhanh</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="p-4 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <Award className="h-6 w-6 text-blue-600 mb-2" />
            <p className="font-medium">Báo cáo hoạt động</p>
            <p className="text-sm text-gray-600">Ghi nhận điểm mới</p>
          </button>
          <button className="p-4 text-left border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <TrendingUp className="h-6 w-6 text-purple-600 mb-2" />
            <p className="font-medium">Xem quy chế</p>
            <p className="text-sm text-gray-600">Tìm hiểu cách tính điểm</p>
          </button>
          <button className="p-4 text-left border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
            <Clock className="h-6 w-6 text-green-600 mb-2" />
            <p className="font-medium">Lịch sử điểm</p>
            <p className="text-sm text-gray-600">Xem báo cáo chi tiết</p>
          </button>
        </div>
      </div>
    </div>
  );

  // Scholarships Page Component - Simple display only
  const ScholarshipsPage = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Các loại Học Bổng</h2>
        <p className="text-gray-600 mb-6">Tổng quan về các loại Học Bổng tại OU</p>
      </div>
      
      {/* All Scholarships Grid - Icon style like reference image */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-6">
              {/* Icon and Color Header like reference image */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${scholarship.color} rounded-full flex items-center justify-center mr-4 text-white shadow-lg`}>
                  <span className="text-3xl">{scholarship.icon}</span>
                </div>
                <div className="flex-1 h-12 bg-gray-100 rounded-xl overflow-hidden">
                  <div className={`w-full h-full ${scholarship.color} opacity-90 flex items-center px-4`}>
                    <span className="text-white font-bold text-xs text-center w-full leading-tight">
                      {scholarship.title}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Clubs Page Component
  const ClubsPage = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Câu Lạc Bộ & Đội nhóm</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">Tất cả</button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Công nghệ</button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Nghệ thuật</button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Cộng đồng</button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Thể thao</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {club.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{club.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{club.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {club.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Tham gia
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'events':
        return <EventsPage />;
      case 'scores':
        return <ScoresPage />;
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'clubs':
        return <ClubsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">OU</span>
                </div>

                <span className="font-bold text-xl text-gray-900 hidden md:block">Cổng Thông Tin Sinh Viên</span>
              </div>
              
              {/* Desktop Navigation */}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full cursor-pointer"></div>
            </div>
          </div>
            <div className="flex items-center justify-center ">
              <nav className="hidden md:flex space-x-1 justify-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
        </div>
        </div>
      
      </header>

      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <nav className="flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 ${
                activeTab === item.id
                  ? 'text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <item.icon className={`h-6 w-6 mb-1 ${activeTab === item.id ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile padding bottom */}
      <div className="h-16 md:hidden"></div>

      {/* Footer - University Information */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* University Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">OU</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Trường Đại học Mở Thành phố Hồ Chí Minh</h3>
                  <p className="text-gray-600 text-sm">Ho Chi Minh City Open University</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Cổng thông tin điện tử dành cho sinh viên, cung cấp thông tin về Học Bổng, 
                điểm rèn luyện và các hoạt động sinh viên.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 97 Võ Văn Tần, Phường 6, Quận 3, TP.HCM</p>
                <p>📞 (028) 3930 0947</p>
                <p>📧 info@ou.edu.vn</p>
                <p>🌐 www.ou.edu.vn</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Quy chế đào tạo</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Lịch học</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Thư viện</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">E-Learning</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Tuyển sinh</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Liên hệ IT</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Góp ý</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Báo lỗi</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2024 Trường Đại học Mở TP.HCM. Trang web được tạo bởi Claude AI
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-xs text-gray-400">Phiên bản 2.0</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Facebook</span>
                    📘
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">YouTube</span>
                    📺
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Email</span>
                    📧
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;