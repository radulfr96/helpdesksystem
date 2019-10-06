﻿using System;
using System.Collections.Generic;

namespace Helpdesk.Common.DTOs
{
    public class UnitDTO
    {
        public int UnitId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        public List<TopicDTO> Topics { get; set; }

        public UnitDTO()
        {
            Topics = new List<TopicDTO>();
        }
    }
}
