// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {LOCALES} from './locales';

export default {
  property: {
    weight: '权重',
    label: '标注',
    fillColor: '填充颜色',
    color: '颜色',
    coverage: '覆盖',
    strokeColor: '描边颜色',
    radius: '半径',
    outline: '轮廓',
    stroke: '描边',
    density: '密度',
    height: '高度',
    sum: '总和',
    pointCount: '点计数'
  },
  placeholder: {
    search: '搜索',
    selectField: '选择一个字段',
    yAxis: 'Y轴',
    selectType: '选择一个类型',
    selectValue: '选择一个值',
    enterValue: '输入一个值',
    empty: '空'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: '数据源',
    brushRadius: '笔刷半径 (km)',
    empty: ' '
  },
  mapLayers: {
    title: '地图图层',
    label: '标注',
    road: '道路',
    border: '行政边界',
    building: '建筑',
    water: '水体',
    land: '土地',
    '3dBuilding': '3d 建筑'
  },
  panel: {
    text: {
      label: '标注',
      labelWithId: '标注 {labelId}',
      fontSize: '字体大小',
      fontColor: '字体颜色',
      textAnchor: '文字基点',
      alignment: '对齐',
      addMoreLabel: '添加更多标注'
    }
  },
  sidebar: {
    panels: {
      layer: '图层',
      filter: '筛选',
      interaction: '交互',
      basemap: '底图'
    }
  },
  layer: {
    required: '必需*',
    radius: '半径',
    color: '颜色',
    fillColor: '填充颜色',
    outline: '轮廓',
    weight: '字重',
    propertyBasedOn: '{property} 基于',
    coverage: '覆盖',
    stroke: '描边',
    strokeWidth: '描边宽度',
    strokeColor: '描边颜色',
    basic: '基础',
    trailLength: '轨迹长度',
    trailLengthDescription: '路径完成消隐所需秒数。',
    newLayer: '新建图层',
    elevationByDescription: '关闭时，高度基于点的数量。',
    colorByDescription: '关闭时，颜色基于点的数量。',
    aggregateBy: '聚合 {field} 通过',
    '3DModel': '3D 模型',
    '3DModelOptions': '3D模型选项',
    type: {
      point: '点',
      arc: '弧',
      line: '线',
      grid: '网格',
      hexbin: 'hexbin',
      polygon: '多面体',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: '图标',
      heatmap: '热力图',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: '角度',
    strokeWidth: '描边宽度 (像素)',
    strokeWidthRange: '描边宽度范围',
    radius: '半径',
    fixedRadius: '固定半径 米制单位',
    fixedRadiusDescription: '地图半径转为米制绝对单位，如 5 代表 5 米',
    radiusRange: '半径范围',
    clusterRadius: '聚合半径 像素单位',
    radiusRangePixels: '半径范围 像素单位',
    opacity: '不透明度',
    coverage: '覆盖',
    outline: '轮廓',
    colorRange: '色域',
    stroke: '描边',
    strokeColor: '描边颜色',
    strokeColorRange: '描边颜色范围',
    targetColor: '目标颜色',
    colorAggregation: '色彩聚合',
    heightAggregation: '高度聚合',
    resolutionRange: '分辨率范围',
    sizeScale: '尺度Size Scale',
    worldUnitSize: '世界单位大小',
    elevationScale: '地形缩放',
    heightScale: '高度缩放',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: '高精度渲染',
    highPrecisionRenderingDescription: '高精度会带来较低的性能',
    height: '高度',
    heightDescription: '点击地图右上角图标切换到3D视图',
    fill: '填充',
    enablePolygonHeight: '打开面高度',
    showWireframe: '显示边线',
    weightIntensity: '权重强度',
    zoomScale: '缩放尺度',
    heightRange: '高度范围'
  },
  layerManager: {
    addData: '添加数据',
    addLayer: '添加图层',
    layerBlending: '图层混合'
  },
  mapManager: {
    mapStyle: '地图样式',
    addMapStyle: '添加地图样式',
    '3dBuildingColor': '3D建筑颜色'
  },
  layerConfiguration: {
    defaultDescription: '计算 {property} 基于选中的字段',
    howTo: '如何'
  },
  filterManager: {
    addFilter: '添加筛选'
  },
  datasetTitle: {
    showDataTable: '显示数据表',
    removeDataset: '移除数据集'
  },
  datasetInfo: {
    rowCount: '{rowCount} 行'
  },
  tooltip: {
    hideLayer: '隐藏图层',
    showLayer: '显示图层',
    hideFeature: '隐藏要素',
    showFeature: '显示要素',
    hide: '隐藏',
    show: '显示',
    removeLayer: '移除图层',
    duplicateLayer: '复制图层',
    layerSettings: '图层设置',
    closePanel: '关闭当前面板',
    switchToDualView: '切换双列地图模式',
    showLegend: '显示图例',
    disable3DMap: '关闭3D地图',
    DrawOnMap: '在地图上绘制',
    selectLocale: '选择语言',
    hideLayerPanel: '隐藏图层面板',
    showLayerPanel: '显示图层面板',
    moveToTop: '置顶到数据图层',
    selectBaseMapStyle: '选择底图样式',
    delete: '删除',
    timePlayback: '时序播放',
    cloudStorage: '云存储',
    '3DMap': '3D地图',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: '速度',
    play: '播放',
    pause: '暂停',
    reset: '重置'
  },
  toolbar: {
    exportImage: '导出图像',
    exportData: '导出数据',
    exportMap: '导出地图',
    shareMapURL: '分享地图链接',
    saveMap: '保存地图',
    select: '选择',
    polygon: '多边形',
    rectangle: '长方形',
    hide: '隐藏',
    show: '显示',
    ...LOCALES
  },
  modal: {
    title: {
      deleteDataset: '删除数据集',
      addDataToMap: '添加数据到地图',
      exportImage: '导出图片',
      exportData: '导出数据',
      exportMap: '导出地图',
      addCustomMapboxStyle: '添加自定义地图样式',
      saveMap: '保存地图',
      shareURL: '分享链接'
    },
    button: {
      delete: '删除',
      download: '下载',
      export: '导出',
      addStyle: '添加样式',
      save: '保存',
      defaultCancel: '取消',
      defaultConfirm: '确认'
    },
    exportImage: {
      ratioTitle: '比例',
      ratioDescription: '按需选择图幅比例',
      ratioOriginalScreen: '原始屏幕',
      ratioCustom: '自定义',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: '分辨率',
      resolutionDescription: '高分辨率更适用于打印。',
      mapLegendTitle: '地图图例',
      mapLegendAdd: '在地图上添加图例'
    },
    exportData: {
      datasetTitle: '数据集',
      datasetSubtitle: '选择要导出的数据集',
      allDatasets: '全部',
      dataTypeTitle: '数据类型',
      dataTypeSubtitle: '选择要导出的数据类型',
      filterDataTitle: '筛选数据',
      filterDataSubtitle: '可以选择导出原始数据或筛选的数据',
      filteredData: '筛选的数据',
      unfilteredData: '未筛选的数据',
      fileCount: '{fileCount} 个文件',
      rowCount: '{rowCount} 行'
    },
    deleteData: {
      warning: '准备删除这个数据集，受影响的图层有 {length} 个'
    },
    addStyle: {
      publishTitle:
        '2. If entered mapbox stule url in step.1, publish your style at mapbox or provide access token. (Optional)',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7:
        'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Paste style url',
      pasteSubtitle0: 'Style url can be a mapbox',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      pasteSubtitle3: 'or a style.json using the',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: '分享地图链接',
      shareUriSubtitle: '创建地图链接分享给别人',
      cloudTitle: '云端存储',
      cloudSubtitle: '登录并上传地图数据到你的个人云端存储',
      shareDisclaimer:
        'kepler.gl 将保存你的地图数据到你的个人云端存储，只有通过此地图链接才能访问你的地图和数据。' +
        '任何时候你都可以在你的云端存储编辑或删除这些数据文件。',
      gotoPage: '前往你的Kepler.gl {currentProvider} 页面'
    },
    statusPanel: {
      mapUploading: '地图上传中',
      error: '错误'
    },
    saveMap: {
      title: '云端存储',
      subtitle: '登录以保存地图到你的个人云端存储'
    },
    exportMap: {
      formatTitle: '地图格式',
      formatSubtitle: '选择要导出的地图格式',
      html: {
        selection: '导出地图到交互式的网页html文件.',
        tokenTitle: 'Mapbox接入密钥',
        tokenSubtitle: '在html文件中使用你自己的Mapbox密钥（可选）',
        tokenPlaceholder: '粘贴你的Mapbox接入密钥',
        tokenMisuseWarning:
          '* 如不提供你的个人Mapbox密钥，如果我们基于防止滥用的考虑而更改了密钥，地图可能不会正常显示。',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: '如何更新一个已经存在的地图密钥。',
        modeTitle: '地图模式',
        modeSubtitle1: '选择地图模式。 更多 ',
        modeSubtitle2: '信息',
        modeDescription: '允许用户 {mode} 地图',
        read: '查看',
        edit: '编辑'
      },
      json: {
        configTitle: '地图设置',
        configDisclaimer:
          '地图设置存储在json文件中。如需在自己的APP中使用kepler.gl，可以把这个配置复制过去。',
        selection:
          '导出当前地图的数据和配置到一个单独的json文件中。之后上传这个文件到kepler.gl即可打开同样的地图。',
        disclaimer:
          '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' +
          'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: '加载中...'
    },
    loadData: {
      upload: '加载文件',
      storage: '从云存储加载'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1:
        'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2:
        'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: '示例：'
    },
    iconInfo: {
      title: '如何绘制图标',
      description1:
        '在csv中创建一个列，写入你想要绘制的图标名。不需绘制的点则留空。一旦此列被命名，',
      code: 'icon',
      description2: ' kepler.gl 将自动为你创建一个图标层。',
      example: '示例：',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: '上次修改于 {lastUpdated} ',
      back: '返回'
    },
    overwriteMap: {
      title: '保存地图...',
      alreadyExists: '已经存在于 {mapSaved}，是否覆盖？'
    },
    loadStorageMap: {
      back: '返回',
      goToPage: '前往你的 Kepler.gl {displayName} 页面',
      storageMaps: '存储 / 地图',
      noSavedMaps: '尚无保存的地图'
    }
  },
  header: {
    visibleLayers: '可见图层',
    layerLegend: '图层图例'
  },
  interactions: {
    tooltip: '工具提示',
    brush: '笔刷',
    coordinate: '坐标',
    geocoder: '地址查询'
  },
  layerBlending: {
    title: '图层混合',
    additive: '相加',
    normal: '正常',
    subtractive: '相减'
  },
  columns: {
    title: '列',
    lat: '纬度',
    lng: '经度',
    altitude: '高程',
    icon: '图标',
    geojson: 'geojson',
    token: 'token',
    arc: {
      lat0: '源纬度',
      lng0: '源经度',
      lat1: '目标纬度',
      lng1: '目标经度'
    },
    grid: {
      worldUnitSize: '网格大小 (km)'
    },
    hexagon: {
      worldUnitSize: '六边形半径 (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: '自定义配色',
    steps: '阶数',
    type: '类型',
    reversed: '反向'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: '拖拽单个或多个文件至此',
    chromeMessage:
      '*Chrome浏览器用户文件大小限制250mb，如需上传更大文件，请尝试Safari',
    disclaimer:
      '*CIIM MAP 基于无服务后台的用户端kepler.gl，数据仅保存在本地设备上，' +
      '无任何信息或地图数据发送到服务器',
    configUploadMessage:
      '上传 {fileFormatNames} 或保存地图 **Json**。了解更多 [**supported file formats**]',
    browseFiles: '浏览文件',
    uploading: '上传中',
    fileNotSupported: '文件 {errorFiles} 不被支持。',
    or: '或'
  },
  geocoder: {
    title: '输入地址或坐标, 如 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: '清除所有',
    formatting: '格式化'
  },
  compare: {
    modeLabel: '对比模式',
    typeLabel: '对比类型',
    types: {
      absolute: '绝对',
      relative: '相对'
    }
  },
  mapPopover: {
    primary: '主要'
  },
  density: '密度',
  'Bug Report': '报告错误',
  'User Guide': '使用说明',
  Save: '保存',
  Share: '分享'
};
