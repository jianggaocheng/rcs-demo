import Mock from 'mockjs';

const Rooms = [];

for (let i = 0; i < 8; i++) {
  Rooms.push(Mock.mock({
    id: Mock.Random.guid(),
    roomNum: Mock.Random.string('0123456789', 4),
    typeName: '大床房'+i,
  }));
}

export { Rooms };
