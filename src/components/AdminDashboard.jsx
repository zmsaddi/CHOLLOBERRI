import React, { useState } from 'react';
import { 
  Package, 
  Image, 
  Languages, 
  Settings, 
  LogOut, 
  BarChart3,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import ProductsManager from './admin/ProductsManager';
import ImagesManager from './admin/ImagesManager';
import TranslationsManager from './admin/TranslationsManager';

const AdminDashboard = ({ onLogout }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'translations', label: 'Translations', icon: Languages },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { label: 'Total Products', value: '10', icon: Package, color: 'bg-blue-500' },
    { label: 'Languages', value: '6', icon: Globe, color: 'bg-green-500' },
    { label: 'Images', value: '30+', icon: Image, color: 'bg-purple-500' },
    { label: 'Active Users', value: '50K+', icon: Users, color: 'bg-orange-500' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Product "Urban Eco Bike" updated</span>
                    <span className="ml-auto text-gray-400">2 hours ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">New translation added for German</span>
                    <span className="ml-auto text-gray-400">5 hours ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Images optimized for mobile</span>
                    <span className="ml-auto text-gray-400">1 day ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('products')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <Package className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="font-medium">Add New Product</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('images')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <Image className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="font-medium">Upload Images</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('translations')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <Languages className="w-5 h-5 text-green-500 mr-3" />
                      <span className="font-medium">Update Translations</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'products':
        return <ProductsManager />;
      case 'images':
        return <ImagesManager />;
      case 'translations':
        return <TranslationsManager />;
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Mugixor Admin</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === item.id
                          ? 'bg-teal-100 text-teal-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

